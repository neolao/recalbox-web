import React from "react";
import Translate from "react-translate-component";

/**
 * The logs
 */
export default class LogsPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.logs"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


