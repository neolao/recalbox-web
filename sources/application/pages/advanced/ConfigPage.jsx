import React from "react";
import Translate from "react-translate-component";
import Textarea from "react-textarea-autosize";

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
            content: "Loading"
        };

    }

    /**
     * The component is mounted
     */
    componentDidMount()
    {
        let self = this;
        let apiUrl = this.props.apiUrl;
        $.ajax({url: `${apiUrl}/configuration`}).done((data) => {
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
        this.setState({content: event.target.value});
    }

    /**
     * The user clicks on the save button
     *
     * @param   {object}    event   The event
     */
    onSave(event)
    {
        let self = this;
        let apiUrl = this.props.apiUrl;
        $.ajax({
            method: "PUT",
            url: `${apiUrl}/configuration`,
            data: this.state.content
        }).done((data) => {
            self.setState({content: data});
        });
    }

    /**
     * render the component
     */
    render()
    {
        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.recalbox.conf"/></h1>
                <Textarea value={this.state.content} onChange={this.onChange.bind(this)}/>
                <p><button onClick={this.onSave.bind(this)}><Translate content="button.save"/></button></p>
            </article>
        );
    }
}

ConfigPage.propTypes = { apiUrl: React.PropTypes.string.isRequired };
