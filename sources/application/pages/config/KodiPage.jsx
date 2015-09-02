import React from "react";
import Translate from "react-translate-component";

/**
 * The configuration of Kodi
 */
export default class KodiPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        let labelColumnClassName = "small-6 medium-5 large-3 columns";
        let fieldColumnClassName = "small-6 medium-7 large-9 columns end";

        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.kodi"/></h1>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="enabled" className="inline">
                            <Translate content="setting.kodi.enabled.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <div className="form-switch switch">
                            <input type="checkbox" id="enabled"/>
                            <label htmlFor="enabled"></label>
                        </div>
                    </div>
                </div>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="atstartup" className="inline">
                            <Translate content="setting.kodi.atstartup.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <div className="form-switch switch">
                            <input type="checkbox" id="atstartup"/>
                            <label htmlFor="atstartup"></label>
                        </div>
                    </div>
                </div>


                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="xbutton" className="inline">
                            <Translate content="setting.kodi.xbutton.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <div className="form-switch switch">
                            <input type="checkbox" id="xbutton"/>
                            <label htmlFor="xbutton"></label>
                        </div>
                    </div>
                </div>


            </article>
        );
    }
}


