import React from "react";
import ReactRouter from "react-router";
import Translate from "react-translate-component";
let RouteHandler = ReactRouter.RouteHandler;
let Link = ReactRouter.Link;

/**
 * The advanced configuration page
 */
export default class AdvancedPage extends React.Component
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
                        <li><Link to="advanced:config"><Translate content="menu.recalbox.conf"/></Link></li>
                        <li><Link to="advanced:logs"><Translate content="menu.logs"/></Link></li>
                    </ul>
                </aside>
                <main className="layout__content">
                    <RouteHandler/>
                </main>
            </div>
        );
    }
}


