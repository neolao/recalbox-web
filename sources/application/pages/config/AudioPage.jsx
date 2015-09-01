import React from "react";
import Translate from "react-translate-component";

/**
 * The audio settings
 */
export default class AudioPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.audio"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


