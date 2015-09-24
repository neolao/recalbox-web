import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "../../components/ApiClient.jsx";


/**
 * The audio settings
 */
export default class AudioPage extends React.Component
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
            device: "auto",
            volume: "90",
            bgmusic: true,
        };
    }


    /**
     * The component is mounted
     */
    componentDidMount()
    {
        let self = this;
        apiClient.get(
            "/audio", 
            counterpart("api.audio.getMessage"), 
            counterpart("api.audio.getError"), 
            "json"
        ).done((data) => {
            self.setState({
                device: data["audio.device"],
                volume: data["audio.volume"],
                bgmusic: (data["audio.bgmusic"] === "1")
            });
        });
    }

    /**
     * The user enables/disables the background music
     *
     * @param   {object}    event   The event
     */
    onChangeBgMusic(event)
    {
        let parameterName = event.target.name;
        let parameterValue = event.target.checked;
        let state = {};
        state[parameterName] = parameterValue;
        this.setState(state);

        let apiValue = (parameterValue)?"1":"0";
        apiClient.put(
            `/audio/bgmusic`, 
            apiValue, 
            counterpart("api.audio.putMessage"),
            counterpart("api.audio.putError"),
            counterpart("api.audio.putSuccess")
        );
    }

    /**
     * The user changes the volume
     *
     * @param   {object}    event   The event
     */
    onChangeVolume(event)
    {
        let parameterName = event.target.name;
        let parameterValue = event.target.value;
        let state = {};
        state[parameterName] = parameterValue;
        this.setState(state);

        apiClient.put(
            `/audio/volume`, 
            parameterValue, 
            counterpart("api.audio.putMessage"),
            counterpart("api.audio.putError"),
            counterpart("api.audio.putSuccess")
        );
    }

    /**
     * The user changes the device
     *
     * @param   {object}    event   The event
     */
    onChangeDevice(event)
    {
        let parameterName = event.target.name;
        let parameterValue = event.target.value;
        let state = {};
        state[parameterName] = parameterValue;
        this.setState(state);

        apiClient.put(
            `/audio/device`, 
            parameterValue, 
            counterpart("api.audio.putMessage"),
            counterpart("api.audio.putError"),
            counterpart("api.audio.putSuccess")
        );
    }

    /**
     * render the component
     */
    render()
    {
        let labelColumnClassName = "small-9 medium-6 large-4 columns";
        let fieldColumnClassName = "small-3 medium-6 large-8 columns end";

        let volumes = [];
        for (let volume = 100; volume >= 0; volume--) {
            volumes.push(<option value={volume} key={"volume-"+volume}>{volume}</option>);
        }

        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.audio"/></h1>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="device" className="inline">
                            <Translate content="setting.audio.device.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <select id="device" name="device" value={this.state.device} onChange={this.onChangeDevice.bind(this)}>
                            <option value="auto">{counterpart("setting.audio.device.auto")}</option>
                            <option value="hdmi">{counterpart("setting.audio.device.hdmi")}</option>
                            <option value="jack">{counterpart("setting.audio.device.jack")}</option>
                        </select>
                    </div>
                </div>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="volume" className="inline">
                            <Translate content="setting.audio.volume.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <select id="volume" name="volume" value={this.state.volume} onChange={this.onChangeVolume.bind(this)}>
                            {volumes}
                        </select>
                    </div>
                </div>


                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="bgmusic" className="inline">
                            <Translate content="setting.audio.bgmusic.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <div className="form-switch switch">
                            <input 
                                type="checkbox" 
                                id="bgmusic" 
                                name="bgmusic" 
                                checked={this.state.bgmusic}
                                onChange={this.onChangeBgMusic.bind(this)}
                            />
                            <label htmlFor="bgmusic"></label>
                        </div>
                    </div>
                </div>


            </article>
        );
    }
}


