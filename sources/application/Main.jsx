import Header from "./components/Header.jsx";
import Homepage from "./pages/Homepage.jsx";

/**
 * The application
 */
export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Homepage/>
            </div>
        );
    }
}


