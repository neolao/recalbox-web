import counterpart from "counterpart";
import Translate from "react-translate-component";
import React from "react";
import apiClient from "./ApiClient.jsx";

/**
 * The API indicator
 * It indicates when an API call is done, during an upload, when an error occurred etc.
 */
export default class ApiIndicator extends React.Component
{
    /**
     * Constructor
     *
     * @param   {object}    props   The properties
     */
    constructor(props)
    {
        super(props);

        // Listen the API client
        apiClient.addEventListener("request", this.onRequest.bind(this));
        apiClient.addEventListener("complete", this.onComplete.bind(this));
        apiClient.addEventListener("success", this.onSuccess.bind(this));
        apiClient.addEventListener("error", this.onError.bind(this));
        apiClient.addEventListener("upload", this.onUpload.bind(this));

        // Initial state
        this.state = {
            type: null,
            requestMessage: null,
            successMessage: null,
            errorMessage: null,
            uploadMessage: null
        };
    }

    /**
     * A request is sent
     *
     * @param   {object}    event   The event
     */
    onRequest(event)
    {
        this.setState({
            type: "info",
            requestMessage: event.message
        });
    }

    /**
     * A request is completed
     * Hide the notification
     *
     * @param   {object}    event   The event
     */
    onComplete(event)
    {
        this.setState({
            type: null
        });
    }

    /**
     * A request succeeded
     *
     * @param   {object}    event   The event
     */
    onSuccess(event)
    {
        this.setState({
            type: "success",
            successMessage: event.message
        });
    }

    /**
     * A request failed
     *
     * @param   {object}    event   The event
     */
    onError(event)
    {
        this.setState({
            type: "error",
            errorMessage: event.message
        });
    }

    /**
     * An upload
     *
     * @param   {object}    event   The event
     */
    onUpload(event)
    {
        this.setState({
            type: "upload",
            uploadMessage: event.message
        });
    }

    /**
     * The user close the alert box
     *
     * @param   {object}    event   The event
     */
    onClose(event)
    {
        this.setState({
            type: null
        });
    }

    /**
     * The component is updated (rendered)
     */
    componentDidUpdate()
    {
        // Update foundation JS
        //$(document).foundation("reflow");
    }


    /**
     * render the copmonent
     */
    render()
    {
        let alertInfoClassName = "api-indicator__alert alert-box info";
        let alertSuccessClassName = "api-indicator__alert alert-box success";
        let alertErrorClassName = "api-indicator__alert alert-box alert";
        let alertUploadClassName = "api-indicator__alert alert-box info";
        switch (this.state.type) {
            case "info":
                alertSuccessClassName += " api-indicator__alert--hidden";
                alertErrorClassName += " api-indicator__alert--hidden";
                alertUploadClassName += " api-indicator__alert--hidden";
                break;
            case "success":
                alertInfoClassName += " api-indicator__alert--hidden";
                alertErrorClassName += " api-indicator__alert--hidden";
                alertUploadClassName += " api-indicator__alert--hidden";
                break;
            case "error":
                alertInfoClassName += " api-indicator__alert--hidden";
                alertSuccessClassName += " api-indicator__alert--hidden";
                alertUploadClassName += " api-indicator__alert--hidden";
                break;
            case "upload":
                alertInfoClassName += " api-indicator__alert--hidden";
                alertErrorClassName += " api-indicator__alert--hidden";
                alertSuccessClassName += " api-indicator__alert--hidden";
                break;
            default:
                alertInfoClassName += " api-indicator__alert--hidden";
                alertErrorClassName += " api-indicator__alert--hidden";
                alertSuccessClassName += " api-indicator__alert--hidden";
                alertUploadClassName += " api-indicator__alert--hidden";
        }

        return (
            <div className="api-indicator">
                <p data-alert className={alertSuccessClassName} key={Math.random()}>
                    {this.state.successMessage}
                    <a href="#" className="close" onClick={this.onClose.bind(this)}>&times;</a>
                </p>
                <p data-alert className={alertErrorClassName} key={Math.random()}>
                    {this.state.errorMessage}
                    <a href="#" className="close" onClick={this.onClose.bind(this)}>&times;</a>
                </p>
                <p data-alert className={alertUploadClassName}>
                    {this.state.uploadMessage}
                </p>
                <p data-alert className={alertInfoClassName}>
                    {this.state.requestMessage}
                </p>
            </div>
        );
    }
}
