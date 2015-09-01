import async from "async";
import counterpart from "counterpart";
import React from "react";
import ReactRouter from "react-router";
import Main from "./Main.jsx";
import HomePage from "./pages/HomePage.jsx";
import ConfigPage from "./pages/ConfigPage.jsx";
import ConfigGeneralPage from "./pages/config/GeneralPage.jsx";
let Route = ReactRouter.Route;
let DefaultRoute = ReactRouter.DefaultRoute;
let HistoryLocation = ReactRouter.HistoryLocation;

// Initialize translations
import en_US from "../../translations/en_US.json";
import fr_FR from "../../translations/fr_FR.json";
counterpart.registerTranslations("en_US", en_US.messages);
counterpart.registerTranslations("fr_FR", fr_FR.messages);
counterpart.setLocale("en_US");

// Initialize routing
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

