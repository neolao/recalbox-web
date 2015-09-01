import counterpart from "counterpart";
import React from "react";
import ReactRouter from "react-router";
import Translate from "react-translate-component";
let Link = ReactRouter.Link;

/**
 * The application header
 */
export default class Header extends React.Component
{
    /**
     * The user changes the locale
     *
     * @param   {object}    event   The click event
     */
    onLocaleChange(event)
    {
        let locale = event.target.attributes.getNamedItem("data-locale");
        counterpart.setLocale(locale.value);
    }

    /**
     * render the copmonent
     */
    render()
    {
        return (
            <header>
                <nav className="tab-bar show-for-small-only">
                    <section className="left-small">
                        <a href="#" role="button" className="left-off-canvas-toggle menu-icon"><span></span></a>
                    </section>

                    <section className="middle tab-bar-section">
                        Recalbox
                    </section>
                </nav>
                <nav className="top-bar hide-for-small" data-topbar role="navigation">
                    <ul className="title-area">
                        <li className="name">
                            <h1>
                                <Link to="home">Recalbox Web Interface</Link>
                            </h1>
                        </li>
                    </ul>
                    <section className="top-bar-section">
                        <ul className="left">
                            <li>
                                <Link to="configuration:general"><Translate content="menu.configuration"/></Link>
                            </li>
                            <li>
                                <Link to="games:listing"><Translate content="menu.games"/></Link>
                            </li>
                            <li>
                                <Link to="advanced:config"><Translate content="menu.advanced"/></Link>
                            </li>
                        </ul>
                        <ul className="right">
                            <li className="has-dropdown">
                                <a><Translate content="locale.label"/></a>
                                <ul className="dropdown">
                                    <li><a data-locale="en_US" onClick={this.onLocaleChange}>English</a></li>
                                    <li><a data-locale="fr_FR" onClick={this.onLocaleChange}>Français</a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </nav>
            </header>
        );
    }
}


