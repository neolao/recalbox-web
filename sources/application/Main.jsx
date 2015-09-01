import React from "react";
import ReactRouter from "react-router";
import Header from "./components/Header.jsx";
import MenuOffCanvas from "./components/MenuOffCanvas.jsx";
let RouteHandler = ReactRouter.RouteHandler;

/**
 * The application
 */
export default class Main extends React.Component
{
    /**
     * render the copmonent
     */
    render() {
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


