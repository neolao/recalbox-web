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
            <div className="page-layout">
                <aside className="page-layout__sidebar hide-for-small">
                    <ul className="menu-sidebar">
                        <li><Link to="advanced:config" className="menu-sidebar__link"><Translate content="menu.recalbox.conf"/></Link></li>
                        <li><Link to="advanced:logs" className="menu-sidebar__link"><Translate content="menu.logs"/></Link></li>
                    </ul>
                </aside>
                <main className="page-layout__content">
                    <RouteHandler {...this.props}/>
                </main>
            </div>
        );
    }
}

