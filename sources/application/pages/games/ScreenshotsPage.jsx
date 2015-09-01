import React from "react";
import Translate from "react-translate-component";

/**
 * The game screenshots
 */
export default class ScreenshotsPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.screenshots"/></h1>
                <p>Lorem ipsum</p>
            </article>
        );
    }
}


