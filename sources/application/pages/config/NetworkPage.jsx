import React from "react";
import Translate from "react-translate-component";

/**
 * The configuration of the network
 */
export default class NetworkPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <div>
                <h1><Translate content="page.title.network"/></h1>
                <p>Lorem ipsum</p>
            </div>
        );
    }
}


