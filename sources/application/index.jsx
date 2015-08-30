import Main from "./Main.jsx";
import HomePage from "./pages/HomePage.jsx";
import ConfigPage from "./pages/ConfigPage.jsx";
import ConfigGeneralPage from "./pages/config/GeneralPage.jsx";
let Route = ReactRouter.Route;
let DefaultRoute = ReactRouter.DefaultRoute;
let HistoryLocation = ReactRouter.HistoryLocation;

let routes = (
    <Route name="home" path="/" handler={Main}>
        <DefaultRoute handler={HomePage}/>
        <Route name="configuration" path="/configuration" handler={ConfigPage}>
            <DefaultRoute handler={ConfigGeneralPage}/>
        </Route>
    </Route>
);

ReactRouter.run(routes, HistoryLocation, function(Handler)
{
    React.render(<Handler/>, document.body);
});

