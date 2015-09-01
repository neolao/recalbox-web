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
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.network"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


