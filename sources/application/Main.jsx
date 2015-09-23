import React from "react";
import ReactRouter from "react-router";
import apiClient from "./components/ApiClient.jsx";
import Header from "./components/Header.jsx";
import MenuOffCanvas from "./components/MenuOffCanvas.jsx";
let RouteHandler = ReactRouter.RouteHandler;

/**
 * The application
 */
export default class Main extends React.Component
{
    /**
     * Constructor
     *
     * @param   {object}    props   Properties
     */
    constructor(props) {
        super(props);

        // Set the initial state
        this.state = {
            apiUrl: null
        };
    }

    /**
     * The component is mounted
     */
    componentDidMount()
    {
        // Load the configuration file
        let self = this;
        $.ajax({url: "/config.json"}).done((data) => {
            data = JSON.parse(data);

            // Update the API client
            if (data.apiUrl) {
                if (data.apiUrl[0] === ":") {
                    data.apiUrl = "http://" + window.location.hostname + data.apiUrl;
                }
                apiClient.setUrl(data.apiUrl);
            }

            self.setState(data);
        });
    }

    /**
     * The component is updated (rendered)
     */
    componentDidUpdate()
    {
        // Update foundation JS
        $(document).foundation("reflow");
    }

    /**
     * render the copmonent
     */
    render() {

        // If the apiUrl is not defined, then display a loading
        if (!this.state.apiUrl) {
            return (
                <div className="loading"><img src="/images/loading/hourglass.svg"/></div>
            );
        }

        return (
            <div className="off-canvas-wrap" data-offcanvas>
                <div className="inner-wrap">
                    <MenuOffCanvas/>
                    <Header className="app-header"/>
                    <div className="app-content">
                        <RouteHandler/>
                    </div>
                </div>
            </div>
        );
    }
}

