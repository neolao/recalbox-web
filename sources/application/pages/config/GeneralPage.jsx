import React from "react";
import Translate from "react-translate-component";

/**
 * The general configuration
 */
export default class GeneralPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <div>
                <h1><Translate content="page.title.general"/></h1>
                <p>Lorem ipsum</p>
            </div>
        );
    }
}


