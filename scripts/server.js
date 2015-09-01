var http = require("http");
var fs = require("fs");
var zlib = require("zlib");
var Stream = require("stream");
var parseUrl = require("url").parse;
var webDirectory = __dirname + "/../web";

// Compression gzip / deflate
var compress = function(request, response, data)
{
    // Check the accept encoding
    var acceptEncoding = request.headers["accept-encoding"];
    if (!acceptEncoding) {
        acceptEncoding = "";
    }

    // gzip
    if (acceptEncoding.match(/\bgzip\b/)) {
        var gzip = zlib.createGzip();
        if (data instanceof Stream) {
            data.pipe(gzip);
        } else {
            gzip.end(data);
        }

        response.setHeader("Content-Encoding", "gzip");

        return gzip;
    }

    // deflate
    if (acceptEncoding.match(/\bdeflate\b/)) {
        var deflate = zlib.createDeflate();
        if (data instanceof Stream) {
            data.pipe(deflate);
        } else {
            deflate.end(data);
        }

        response.setHeader("Content-Encoding", "deflate");

        return deflate;
    }

    return data;
};

// Create an HTTP server
var server = http.createServer(function(request, response)
{
    // Get the file path
    var urlInfo = parseUrl(request.url, true);
    var filePath = webDirectory + urlInfo.pathname;
    var mainHtml = webDirectory + "/index.html";

    // Detect the mime type
    var mime = "text/plain";
    if (/\.html$/.test(filePath)) {
        mime = "text/html";
    } else if (/\.js$/.test(filePath)) {
        mime = "application/javascript";
    } else if (/\.jpe?g$/.test(filePath)) {
        mime = "image/jpeg";
    } else if (/\.png$/.test(filePath)) {
        mime = "image/png";
    } else if (/\.svg$/.test(filePath)) {
        mime = "application/svg+xml";
    } else if (/\.css$/.test(filePath)) {
        mime = "text/css";
    }

    // Detect accept encoding
    // @todo

    // Check the file
    fs.stat(filePath, function(error, stats)
    {
        if (!error && stats.isFile()) {
            // Get the file content
            fs.readFile(filePath, function(error, data)
            {
                if (error) {
                    throw error;
                }

                // gzip / deflate
                data = compress(request, response, data);

                // Display the content
                response.setHeader("Content-Type", mime);
                response.statusCode = 200;
                if (data instanceof Stream) {
                    data.pipe(response);
                } else {
                    response.end(data);
                }
            });
            return;
        }

        // Display the main HTML
        fs.readFile(mainHtml, function(error, data)
        {
            // gzip / deflate
            data = compress(request, response, data);

            response.setHeader("Content-Type", "text/html");
            response.statusCode = 200;
            if (data instanceof Stream) {
                data.pipe(response);
            } else {
                response.end(data);
            }
        });
    });
});

// Start the server
server.listen(8003, "127.0.0.1", function()
{
    console.log("Server started");
});
