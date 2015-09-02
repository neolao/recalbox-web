import React from "react";
import Translate from "react-translate-component";

/**
 * The configuration of the network
 */
export default class NetworkPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        let labelColumnClassName = "small-12 medium-4 large-2 columns";
        let fieldColumnClassName = "small-12 medium-8 large-6 columns end";

        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.network"/></h1>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="hostname" className="inline-for-medium-up">
                            <Translate content="setting.hostname.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <input type="text" id="hostname"/>
                    </div>
                </div>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="enabled" className="inline-for-medium-up">
                            <Translate content="setting.wifi.enabled.label"/>
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
                        <label htmlFor="ssid" className="inline-for-medium-up">
                            <Translate content="setting.wifi.ssid.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <input type="text" id="ssid"/>
                    </div>
                </div>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="key" className="inline-for-medium-up">
                            <Translate content="setting.wifi.key.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <input type="text" id="key"/>
                    </div>
                </div>



            </article>
        );
    }
}


