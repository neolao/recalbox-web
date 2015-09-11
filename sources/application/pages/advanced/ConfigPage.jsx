import React from "react";
import Translate from "react-translate-component";
import Textarea from "react-textarea-autosize";
import apiClient from "../../components/ApiClient.jsx";
//import AceEditor from "react-ace";

/**
 * The main configuration file (recalbox.conf)
 */
export default class ConfigPage extends React.Component
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
            content: "..."
        };

    }

    /**
     * The component is mounted
     */
    componentDidMount()
    {
        let self = this;
        apiClient.get("/configuration", "Get configuration").done((data) => {
            self.setState({content: data});
        });
    }

    /**
     * The user changes the content
     *
     * @param   {object}    event   The event
     */
    onChange(event)
    {
        let newContent = event.target.value;
        //let newContent = event;
        this.setState({content: newContent});
    }

    /**
     * The user clicks on the save button
     *
     * @param   {object}    event   The event
     */
    onSave(event)
    {
        let self = this;
        apiClient.put("/configuration", this.state.content, "Save configuration").done((data) => {
            self.setState({content: data});
        });
    }

    /**
     * render the component
     */
    render()
    {
        /*
        let editor = (
            <AceEditor 
                mode="ini" 
                theme="github" 
                width="100%" 
                editorProps={{$blockScrolling: true, autoScrollEditorIntoView: true}} 
                name="config" 
                value={this.state.content} 
                onChange={this.onChange.bind(this)}
            />
        );
        */
        let editor = (
            <Textarea value={this.state.content} onChange={this.onChange.bind(this)}/>
        );


        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.recalbox.conf"/></h1>
                {editor}
                <p><button onClick={this.onSave.bind(this)}><Translate content="button.save"/></button></p>
            </article>
        );
    }
}

