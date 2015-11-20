import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "./ApiClient.jsx";

/**
 * Modal to upload files
 */
export default class ModalUpload extends React.Component
{
    /**
     * Constructor
     *
     * @param   {object}    props   The properties
     */
    constructor(props)
    {
        super(props);
    }

    /**
     * render the copmonent
     */
    render()
    {
        return (
            <div id="upload" className="reveal-modal" data-reveal aria-labelledby="Upload modal" aria-hidden="true" role="dialog">
                <h1>Upload</h1>
                <a className="close-reveal-modal" aria-label="Close">&#215;</a>
            </div>
        );
    }
}
