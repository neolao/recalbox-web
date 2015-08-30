import Header from "./components/Header.jsx";
let RouteHandler = ReactRouter.RouteHandler;
let Link = ReactRouter.Link;

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
                    <nav className="left-off-canvas-menu">
                        <ul className="side-nav">
                            <li><Link to="home">Homepage</Link></li>
                            <li>
                                Configuration
                                <ul>
                                    <li><Link to="configuration">General</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    <Header className="app-header"/>
                    <div className="app-content">
                        <RouteHandler/>
                    </div>
                </div>
            </div>
        );
    }
}


