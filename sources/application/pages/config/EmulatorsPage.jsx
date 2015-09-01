import React from "react";
import Translate from "react-translate-component";

/**
 * The emulators settings
 */
export default class EmulatorsPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.emulators"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


