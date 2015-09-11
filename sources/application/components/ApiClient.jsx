/**
 * The API client
 */
class ApiClient
{
    /**
     * Constructor
     */
    constructor()
    {
        // The API URL
        this.url = null;

        // The event listeners
        this.eventListeners = {};
    }

    /**
     * Set the API URL
     *
     * @param   {string}    url     The URL
     */
    setUrl(url:string)
    {
        this.url = url;
    }

    /**
     * Get the API URL
     *
     * @return  {string}    The URL
     */
    getUrl()
    {
        return this.url;
    }

    /**
     * Add an event listener
     *
     * @param   {string}    name        The event name
     * @param   {function}  listener    The listener
     */
    addEventListener(name:string, listener)
    {
        if (!this.eventListeners[name]) {
            this.eventListeners[name] = [];
        }

        this.eventListeners[name].push(listener);
    }

    /**
     * Dispatch an event to listeners
     *
     * @param   {Event}     event   The event
     */
    dispatchEvent(event:Event)
    {
        let name = event.type;

        if (!this.eventListeners[name]) {
            return;
        }

        for (let listener of this.eventListeners[name]) {
            listener(event);
        }
    }

    /**
     * Execute a GET request to the API
     *
     * @param   {string}    path    The path
     * @param   {string}    message The message
     * @param   {string}    format  The format (text, json, xml)
     */
    get(path:string, message:string, format:string = null)
    {
        let self = this;

        // Dispatch the event
        let event = new Event("request");
        event.message = message;
        this.dispatchEvent(event);

        if (!format) {
            format = "text";
        }

        return $.ajax({
            method: "GET",
            url: `${this.url}${path}`,
            dataType: format,
            complete: () => {
                let event = new Event("complete");
                self.dispatchEvent(event);
            },
            error: (xhr, status, errorMessage) => {
                let event = new Event("error");
                event.message = `${errorMessage} (${status})`;
                self.dispatchEvent(event);
            }
        });
    }

    /**
     * Execute a PUT request to the API
     *
     * @param   {string}    path    The path
     * @param   {any}       data    The data to send
     * @param   {string}    message The message
     * @param   {string}    format  The format (text, json, xml)
     */
    put(path:string, data, message:string, format:string = null)
    {
        let self = this;

        // Dispatch the event
        let event = new Event("request");
        event.message = message;
        this.dispatchEvent(event);

        return $.ajax({
            method: "PUT",
            url: `${this.url}${path}`,
            data: data,
            success: () => {
                let event = new Event("success");
                event.message = message;
                self.dispatchEvent(event);
            },
            error: (xhr, status, errorMessage) => {
                let event = new Event("error");
                event.message = `${errorMessage} (${status})`;
                self.dispatchEvent(event);
            }
        });
    }
}

export default new ApiClient();
