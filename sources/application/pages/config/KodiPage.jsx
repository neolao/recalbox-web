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
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.kodi"/></h1>

                <div className="clearfix">
                    <div className="small-2 medium-2 large-1 columns">
                        <div className="form-switch switch tiny">
                            <input type="checkbox" id="enabled"/>
                            <label htmlFor="enabled"></label>
                        </div>
                    </div>
                    <div className="small-10 medium-6 large-5 columns end">
                        <label htmlFor="enabled"><Translate content="setting.kodi.enabled.label"/></label>
                    </div>
                </div>

                <div className="clearfix">
                    <div className="small-2 medium-2 large-1 columns">
                        <div className="form-switch switch tiny">
                            <input type="checkbox" id="atstartup"/>
                            <label htmlFor="atstartup"></label>
                        </div>
                    </div>
                    <div className="small-10 medium-6 large-5 columns end">
                        <label htmlFor="atstartup"><Translate content="setting.kodi.atstartup.label"/></label>
                    </div>
                </div>


                <div className="clearfix">
                    <div className="small-2 medium-2 large-1 columns">
                        <div className="form-switch switch tiny">
                            <input type="checkbox" id="xbutton"/>
                            <label htmlFor="xbutton"></label>
                        </div>
                    </div>
                    <div className="small-10 medium-6 large-5 columns end">
                        <label htmlFor="xbutton"><Translate content="setting.kodi.xbutton.label"/></label>
                    </div>
                </div>


            </article>
        );
    }
}


