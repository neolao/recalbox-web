import React from "react";
import Translate from "react-translate-component";

/**
 * The main configuration file (recalbox.conf)
 */
export default class ConfigPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.recalbox.conf"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


