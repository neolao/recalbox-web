import counterpart from "counterpart";
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
    render() {
        // Build the language list
        let availableLocales = counterpart.getAvailableLocales();
        let currentLocale = counterpart.getLocale();
        let languageList = [];
        for (let availableLocale of availableLocales) {
            let localeLabel = counterpart("locale.label", {locale: availableLocale});
            let linkClassName = "menu-off-canvas__link";
            if (availableLocale === currentLocale) {
                linkClassName += " menu-off-canvas__link--active";
            }
            languageList.push(
                <li className="menu-off-canvas__item" key={availableLocale}>
                    <a className={linkClassName} data-locale={availableLocale} onClick={this.onLocaleChange.bind(this)}>{localeLabel}</a>
                </li>
            );
        }

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
                                <Link to="configuration:general" className="menu-off-canvas__link"><Translate content="menu.general"/></Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration:kodi" className="menu-off-canvas__link"><Translate content="menu.kodi"/></Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration:network" className="menu-off-canvas__link"><Translate content="menu.network"/></Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration:audio" className="menu-off-canvas__link"><Translate content="menu.audio"/></Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration:controllers" className="menu-off-canvas__link"><Translate content="menu.controllers"/></Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="configuration:emulators" className="menu-off-canvas__link"><Translate content="menu.emulators"/></Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="menu-off-canvas__section-title"><Translate content="menu.games"/></span>
                        <ul className="menu-off-canvas__section">
                            <li className="menu-off-canvas__item">
                                <Link to="games:listing" className="menu-off-canvas__link"><Translate content="menu.listing"/></Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="games:bios" className="menu-off-canvas__link"><Translate content="menu.bios"/></Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="games:saves" className="menu-off-canvas__link"><Translate content="menu.saves"/></Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="games:screenshots" className="menu-off-canvas__link"><Translate content="menu.screenshots"/></Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="menu-off-canvas__section-title"><Translate content="menu.advanced"/></span>
                        <ul className="menu-off-canvas__section">
                            <li className="menu-off-canvas__item">
                                <Link to="advanced:config" className="menu-off-canvas__link"><Translate content="menu.recalbox.conf"/></Link>
                            </li>
                            <li className="menu-off-canvas__item">
                                <Link to="advanced:logs" className="menu-off-canvas__link"><Translate content="menu.logs"/></Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="menu-off-canvas__section-title"><Translate content="menu.language"/></span>
                        <ul className="menu-off-canvas__section">
                            {languageList}
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}


