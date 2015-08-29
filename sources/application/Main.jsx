import Header from "./components/Header.jsx";
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
            <div>
                <Header/>
                <RouteHandler/>
            </div>
        );
    }
}


