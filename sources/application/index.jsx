import Main from "./Main.jsx";
import HomePage from "./pages/HomePage.jsx";
import ConfigPage from "./pages/ConfigPage.jsx";
let Route = ReactRouter.Route;
let DefaultRoute = ReactRouter.DefaultRoute;
let HistoryLocation = ReactRouter.HistoryLocation;

let routes = (
    <Route name="home" path="/" handler={Main}>
        <DefaultRoute handler={HomePage}/>
        <Route name="configuration" path="/configuration" handler={ConfigPage}/>
    </Route>
);

ReactRouter.run(routes, HistoryLocation, function(Handler)
{
    React.render(<Handler/>, document.body);
});

