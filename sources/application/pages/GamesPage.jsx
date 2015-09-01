import React from "react";
import ReactRouter from "react-router";
import Translate from "react-translate-component";
let RouteHandler = ReactRouter.RouteHandler;
let Link = ReactRouter.Link;

/**
 * The games page
 */
export default class GamesPage extends React.Component
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
                        <li><Link to="games:listing"><Translate content="menu.listing"/></Link></li>
                        <li><Link to="games:bios"><Translate content="menu.bios"/></Link></li>
                        <li><Link to="games:saves"><Translate content="menu.saves"/></Link></li>
                        <li><Link to="games:screenshots"><Translate content="menu.screenshots"/></Link></li>
                    </ul>
                </aside>
                <main className="layout__content">
                    <RouteHandler/>
                </main>
            </div>
        );
    }
}


