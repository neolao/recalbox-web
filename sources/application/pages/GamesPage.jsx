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
            <div className="page-layout">
                <aside className="page-layout__sidebar hide-for-small">
                    <ul className="menu-sidebar">
                        <li><Link to="games:roms" className="menu-sidebar__link"><Translate content="menu.roms"/></Link></li>
                        <li><Link to="games:bios" className="menu-sidebar__link"><Translate content="menu.bios"/></Link></li>
                        <li><Link to="games:saves" className="menu-sidebar__link"><Translate content="menu.saves"/></Link></li>
                        <li><Link to="games:screenshots" className="menu-sidebar__link"><Translate content="menu.screenshots"/></Link></li>
                    </ul>
                </aside>
                <main className="page-layout__content">
                    <RouteHandler {...this.props}/>
                </main>
            </div>
        );
    }
}


