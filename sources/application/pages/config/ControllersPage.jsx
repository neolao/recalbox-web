import React from "react";
import Translate from "react-translate-component";

/**
 * The controllers settings
 */
export default class ControllersPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.controllers"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


