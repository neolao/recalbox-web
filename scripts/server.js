var http = require("http");
var fs = require("fs");
var parseUrl = require("url").parse;
var webDirectory = __dirname + "/../web";

// Create an HTTP server
var server = http.createServer(function(request, response)
{
    // Get the file path
    var urlInfo = parseUrl(request.url, true);
    var filePath = webDirectory + urlInfo.pathname;
    if (urlInfo.pathname === "/") {
        filePath = webDirectory + "/index.html";
    }

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

                // Display the content
                response.writeHead(200, {"Content-Type": mime});
                response.end(data);
            });
            return;
        }

        // An error occurred or it is not a file
        response.writeHead(404);
        response.end("Not found");
    });
});

// Start the server
server.listen(8003, "127.0.0.1", function()
{
    console.log("Server started");
});
