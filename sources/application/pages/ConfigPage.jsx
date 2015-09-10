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
            <div className="page-layout">
                <aside className="page-layout__sidebar hide-for-small">
                    <ul className="menu-sidebar">
                        <li><Link to="configuration:general" className="menu-sidebar__link"><Translate content="menu.general"/></Link></li>
                        <li><Link to="configuration:kodi" className="menu-sidebar__link"><Translate content="menu.kodi"/></Link></li>
                        <li><Link to="configuration:network" className="menu-sidebar__link"><Translate content="menu.network"/></Link></li>
                        <li><Link to="configuration:audio" className="menu-sidebar__link"><Translate content="menu.audio"/></Link></li>
                        <li><Link to="configuration:controllers" className="menu-sidebar__link"><Translate content="menu.controllers"/></Link></li>
                        <li><Link to="configuration:emulators" className="menu-sidebar__link"><Translate content="menu.emulators"/></Link></li>
                    </ul>
                </aside>
                <main className="page-layout__content">
                    <RouteHandler {...this.props}/>
                </main>
            </div>
        );
    }
}


