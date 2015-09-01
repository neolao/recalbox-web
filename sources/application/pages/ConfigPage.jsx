import React from "react";
import ReactRouter from "react-router";
import Translate from "react-translate-component";
let RouteHandler = ReactRouter.RouteHandler;
let Link = ReactRouter.Link;

/**
 * The configuration page
 */
export default class ConfigPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <div className="layout">
                <aside className="layout__sidebar hide-for-small">
                    <ul className="side-nav">
                        <li><Link to="configuration:general"><Translate content="menu.general"/></Link></li>
                        <li><Link to="configuration:kodi"><Translate content="menu.kodi"/></Link></li>
                        <li><Link to="configuration:network"><Translate content="menu.network"/></Link></li>
                        <li><Link to="configuration:audio"><Translate content="menu.audio"/></Link></li>
                        <li><Link to="configuration:controllers"><Translate content="menu.controllers"/></Link></li>
                        <li><Link to="configuration:emulators"><Translate content="menu.emulators"/></Link></li>
                    </ul>
                </aside>
                <main className="layout__content">
                    <RouteHandler/>
                </main>
            </div>
        );
    }
}


