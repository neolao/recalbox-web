import React from "react";
import Translate from "react-translate-component";

/**
 * The system BIOS
 */
export default class BiosPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.bios"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


