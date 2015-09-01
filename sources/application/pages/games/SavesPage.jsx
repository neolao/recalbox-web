import React from "react";
import Translate from "react-translate-component";

/**
 * The game saves
 */
export default class SavesPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.saves"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


