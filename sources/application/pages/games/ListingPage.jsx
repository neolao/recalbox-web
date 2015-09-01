import React from "react";
import Translate from "react-translate-component";

/**
 * The listing of games
 */
export default class ListingPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.games.listing"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


