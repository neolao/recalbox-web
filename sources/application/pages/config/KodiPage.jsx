import React from "react";
import Translate from "react-translate-component";

/**
 * The configuration of Kodi
 */
export default class KodiPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <div>
                <h1><Translate content="page.title.kodi"/></h1>
                <p>Lorem ipsum</p>
            </div>
        );
    }
}


