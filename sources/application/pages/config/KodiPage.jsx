import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "../../components/ApiClient.jsx";

/**
 * The configuration of Kodi
 */
export default class KodiPage extends React.Component
{
    /**
     * Constructor
     *
     * @param   {object}    props   Properties
     */
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            enabled: false,
            atstartup: false,
            xbutton: false,
        };
    }

    /**
     * The component is mounted
     */
    componentDidMount()
    {
        let self = this;
        apiClient.get(
            "/kodi", 
            counterpart("api.kodi.getMessage"), 
            counterpart("api.kodi.getError"), 
            "json"
        ).done((data) => {
            self.setState({
                enabled: (data["enabled"] === "1"),
                atstartup: (data["atstartup"] === "1"),
                xbutton: (data["xbutton"] === "1")
            });
        });
    }

    /**
     * The user changes a setting
     *
     * @param   {object}    event   The event
     */
    onChange(event)
    {
        let parameterName = event.target.name;
        let parameterValue = event.target.checked;
        let state = {};
        state[parameterName] = parameterValue;
        this.setState(state);

        let apiValue = (parameterValue)?"1":"0";
        apiClient.put(
            `/kodi/${parameterName}`, 
            apiValue, 
            counterpart("api.kodi.putMessage"),
            counterpart("api.kodi.putError"),
            counterpart("api.kodi.putSuccess")
        );
    }

    /**
     * render the component
     */
    render()
    {
        let labelColumnClassName = "small-9 medium-6 large-4 columns";
        let fieldColumnClassName = "small-3 medium-6 large-8 columns end";

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
                            <input 
                                type="checkbox" 
                                id="enabled" 
                                name="enabled" 
                                checked={this.state.enabled}
                                onChange={this.onChange.bind(this)}
                            />
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
                            <input 
                                type="checkbox" 
                                id="atstartup" 
                                name="atstartup" 
                                checked={this.state.atstartup}
                                onChange={this.onChange.bind(this)}
                            />
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
                            <input 
                                type="checkbox" 
                                id="xbutton" 
                                name="xbutton" 
                                checked={this.state.xbutton}
                                onChange={this.onChange.bind(this)}
                            />
                            <label htmlFor="xbutton"></label>
                        </div>
                    </div>
                </div>


            </article>
        );
    }
}


