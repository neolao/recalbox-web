import React from "react";
import Translate from "react-translate-component";

/**
 * The homepage
 */
export default class HomePage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.homepage"/></h1>
            </article>
        );
    }
}


