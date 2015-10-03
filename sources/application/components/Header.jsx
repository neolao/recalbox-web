import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import ReactRouter from "react-router";
import ApiIndicator from "./ApiIndicator.jsx";
let Link = ReactRouter.Link;

/**
 * The application header
 */
export default class Header extends React.Component
{
    /**
     * Constructor
     *
     * @param   {object}    props   The properties
     */
    constructor(props)
    {
        super(props);

        this.state = {
            currentLocale: counterpart.getLocale()
        };
    }

    /**
     * The user changes the locale
     *
     * @param   {object}    event   The click event
     */
    onLocaleChange(event)
    {
        let locale = event.target.attributes.getNamedItem("data-locale");
        counterpart.setLocale(locale.value);

        this.setState({currentLocale: locale.value});
    }

    /**
     * render the copmonent
     */
    render()
    {
        // Build the language list
        let availableLocales = counterpart.getAvailableLocales();
        let currentLocale = counterpart.getLocale();
        let languageList = [];
        for (let availableLocale of availableLocales) {
            let localeLabel = counterpart("locale.label", {locale: availableLocale});
            languageList.push(
                <li key={availableLocale}>
                    <a data-locale={availableLocale} onClick={this.onLocaleChange.bind(this)}>{localeLabel}</a>
                </li>
            );
        }


        return (
            <header className="header">
                <ApiIndicator/>
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
                                <Link to="games:roms"><Translate content="menu.games"/></Link>
                            </li>
                            <li>
                                <Link to="advanced:config"><Translate content="menu.advanced"/></Link>
                            </li>
                        </ul>
                        <ul className="right">
                            <li className="has-dropdown">
                                <a><Translate content="locale.label"/></a>
                                <ul className="dropdown" key={Math.random()}>
                                    {languageList}
                                </ul>
                            </li>
                        </ul>
                    </section>
                </nav>
            </header>
        );
    }
}


