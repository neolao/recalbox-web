import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "./ApiClient.jsx";

/**
 * Button to upload files
 */
export default class ButtonUpload extends React.Component
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
     * Render the component
     */
    render()
    {
        return (
            <span className="button small button-upload">
                <Translate content="button.add"/>
                <input type="file"/>
            </span>
        );
    }
}
