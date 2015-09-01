import async from "async";
import counterpart from "counterpart";
import React from "react";
import ReactRouter from "react-router";
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
import Main                 from "./Main.jsx";
import HomePage             from "./pages/HomePage.jsx";
import ConfigPage           from "./pages/ConfigPage.jsx";
import ConfigGeneralPage    from "./pages/config/GeneralPage.jsx";
import ConfigKodiPage       from "./pages/config/KodiPage.jsx";
import ConfigNetworkPage    from "./pages/config/NetworkPage.jsx";
import ConfigAudioPage      from "./pages/config/AudioPage.jsx";
import ConfigControllersPage from "./pages/config/ControllersPage.jsx";
import ConfigEmulatorsPage  from "./pages/config/EmulatorsPage.jsx";
import GamesPage            from "./pages/GamesPage.jsx";
import GameListingPage      from "./pages/games/ListingPage.jsx";
import AdvancedPage         from "./pages/AdvancedPage.jsx";
let routes = (
    <Route name="main" path="/" handler={Main}>
        <Route name="home" path="/" handler={HomePage}/>
        <Route name="configuration" path="/configuration" handler={ConfigPage}>
            <Route name="configuration:general" path="/configuration/general" handler={ConfigGeneralPage}/>
            <Route name="configuration:kodi" path="/configuration/kodi" handler={ConfigKodiPage}/>
            <Route name="configuration:network" path="/configuration/network" handler={ConfigNetworkPage}/>
            <Route name="configuration:audio" path="/configuration/audio" handler={ConfigAudioPage}/>
            <Route name="configuration:controllers" path="/configuration/controllers" handler={ConfigControllersPage}/>
            <Route name="configuration:emulators" path="/configuration/emulators" handler={ConfigEmulatorsPage}/>
        </Route>
        <Route name="games" path="/games" handler={GamesPage}>
            <Route name="games:listing" path="/games/bios" handler={GameListingPage}/>
            <Route name="games:bios" path="/games/bios" handler={GameListingPage}/>
            <Route name="games:saves" path="/games/saves" handler={GameListingPage}/>
            <Route name="games:screenshots" path="/games/screenshots" handler={GameListingPage}/>
        </Route>
        <Route name="advanced" path="/advanced" handler={AdvancedPage}>
            <Route name="advanced:config" path="/advanced/config" handler={GameListingPage}/>
            <Route name="advanced:logs" path="/advanced/logs" handler={GameListingPage}/>
        </Route>
    </Route>
);
ReactRouter.run(routes, HistoryLocation, function(Handler)
{
    React.render(<Handler/>, document.body);
});

