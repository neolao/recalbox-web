import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "../../components/ApiClient.jsx";


/**
 * The configuration of the network
 */
export default class NetworkPage extends React.Component
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
            hostname: "",
            wifiEnabled: false,
            wifiSSID: "",
            wifiKey: "",
        };

        this.timeoutHostname = null;
        this.timeoutWifiSSID = null;
        this.timeoutWifiKey = null;
    }


    /**
     * The component is mounted
     */
    componentDidMount()
    {
        let self = this;
        apiClient.get(
            "/hostname", 
            counterpart("api.hostname.getMessage"), 
            counterpart("api.hostname.getError"), 
            "json"
        ).done((data) => {
            self.setState({hostname: data["system.hostname"]});
        });

        apiClient.get(
            "/wifi", 
            counterpart("api.wifi.getMessage"), 
            counterpart("api.wifi.getError"), 
            "json"
        ).done((data) => {
            self.setState({
                wifiEnabled: (data["wifi.enabled"] === "1"),
                wifiSSID: data["wifi.ssid"],
                wifiKey: data["wifi.key"]
            });
        });
    }

    /**
     * The user changes the hostname
     *
     * @param   {object}    event   The event
     */
    onChangeHostname(event)
    {
        let parameterName = event.target.name;
        let parameterValue = event.target.value;
        let state = {
            hostname: parameterValue
        };
        this.setState(state);

        clearTimeout(this.timeoutHostname);
        this.timeoutHostname = setTimeout(() => {
            apiClient.put(
                `/hostname`, 
                parameterValue, 
                counterpart("api.hostname.putMessage"),
                counterpart("api.hostname.putError"),
                counterpart("api.hostname.putSuccess")
            );
        }, 1000);
    }

    /**
     * The user enables/disables the WIFI
     *
     * @param   {object}    event   The event
     */
    onChangeWifiEnabled(event)
    {
        let parameterName = event.target.name;
        let parameterValue = event.target.checked;
        let state = {
            wifiEnabled: parameterValue
        };
        this.setState(state);


        let apiValue = (parameterValue)?"1":"0";
        apiClient.put(
            `/wifi/enabled`, 
            apiValue, 
            counterpart("api.wifi.putMessage"),
            counterpart("api.wifi.putError"),
            counterpart("api.wifi.putSuccess")
        );
    }


    /**
     * The user changes the wifi SSID
     *
     * @param   {object}    event   The event
     */
    onChangeWifiSSID(event)
    {
        let parameterName = event.target.name;
        let parameterValue = event.target.value;
        let state = {
            wifiSSID: parameterValue
        };
        this.setState(state);

        clearTimeout(this.timeoutWifiSSID);
        this.timeoutWifiSSID = setTimeout(() => {
            apiClient.put(
                `/wifi/ssid`, 
                parameterValue, 
                counterpart("api.wifi.putMessage"),
                counterpart("api.wifi.putError"),
                counterpart("api.wifi.putSuccess")
            );
        }, 1000);
    }

    /**
     * The user changes the wifi Key
     *
     * @param   {object}    event   The event
     */
    onChangeWifiKey(event)
    {
        let parameterName = event.target.name;
        let parameterValue = event.target.value;
        let state = {
            wifiKey: parameterValue
        };
        this.setState(state);

        clearTimeout(this.timeoutWifiKey);
        this.timeoutWifiKey = setTimeout(() => {
            apiClient.put(
                `/wifi/key`, 
                parameterValue, 
                counterpart("api.wifi.putMessage"),
                counterpart("api.wifi.putError"),
                counterpart("api.wifi.putSuccess")
            );
        }, 1000);
    }

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
                        <input 
                            type="text" 
                            id="hostname" 
                            name="system.hostname" 
                            value={this.state.hostname}
                            onChange={this.onChangeHostname.bind(this)}
                        />
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
                            <input 
                                type="checkbox" 
                                id="enabled" 
                                name="wifi.enabled" 
                                checked={this.state.wifiEnabled} 
                                onChange={this.onChangeWifiEnabled.bind(this)}
                            />
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
                        <input 
                            type="text" 
                            id="ssid" 
                            name="wifi.ssid" 
                            value={this.state.wifiSSID}
                            onChange={this.onChangeWifiSSID.bind(this)}
                        />
                    </div>
                </div>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="key" className="inline-for-medium-up">
                            <Translate content="setting.wifi.key.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <input 
                            type="text" 
                            id="key" 
                            name="wifi.key" 
                            value={this.state.wifiKey}
                            onChange={this.onChangeWifiKey.bind(this)}
                        />
                    </div>
                </div>



            </article>
        );
    }
}


