import React from "react";
import ReactRouter from "react-router";
import Translate from "react-translate-component";
let Link = ReactRouter.Link;

/**
 * The menu outside the canvas
 * It appears on mobile
 */
export default class MenuOffCanvas extends React.Component
{
    /**
     * render the copmonent
     */
    render() {
        return (
            <nav className="menu-off-canvas left-off-canvas-menu">
                <ul className="menu-off-canvas__section">
                    <li className="menu-off-canvas__item">
                        <Link to="home" className="menu-off-canvas__link"><Translate content="menu.homepage"/></Link>
                    </li>
                    <li>
                        <span className="menu-off-canvas__section-title"><Translate content="menu.configuration"/></span>
                        <ul className="menu-off-canvas__section">
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">General</Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">Kodi</Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">Network</Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">Audio</Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">Controllers</Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">Emulators</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="menu-off-canvas__section-title"><Translate content="menu.games"/></span>
                        <ul className="menu-off-canvas__section">
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">Listing</Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">BIOS</Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">Saves</Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">Screenshots</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="menu-off-canvas__section-title"><Translate content="menu.advanced"/></span>
                        <ul className="menu-off-canvas__section">
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">recalbox.conf</Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration" className="menu-off-canvas__link">Logs</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}


