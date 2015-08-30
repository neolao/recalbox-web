(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentsHeaderJsx = require("./components/Header.jsx");

var _componentsHeaderJsx2 = _interopRequireDefault(_componentsHeaderJsx);

var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

/**
 * The application
 */

var Main = (function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        _get(Object.getPrototypeOf(Main.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Main, [{
        key: "render",

        /**
         * render the copmonent
         */
        value: function render() {
            return React.createElement(
                "div",
                { className: "off-canvas-wrap", "data-offcanvas": true },
                React.createElement(
                    "div",
                    { className: "inner-wrap" },
                    React.createElement(
                        "nav",
                        { className: "left-off-canvas-menu" },
                        React.createElement(
                            "ul",
                            { className: "side-nav" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    Link,
                                    { to: "home" },
                                    "Homepage"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Configuration",
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            Link,
                                            { to: "configuration" },
                                            "General"
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(_componentsHeaderJsx2["default"], { className: "app-header" }),
                    React.createElement(
                        "div",
                        { className: "app-content" },
                        React.createElement(RouteHandler, null)
                    )
                )
            );
        }
    }]);

    return Main;
})(React.Component);

exports["default"] = Main;
module.exports = exports["default"];


},{"./components/Header.jsx":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = ReactRouter.Link;

/**
 * The application header
 */

var Header = (function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        _get(Object.getPrototypeOf(Header.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Header, [{
        key: "render",

        /**
         * render the copmonent
         */
        value: function render() {
            return React.createElement(
                "header",
                null,
                React.createElement(
                    "nav",
                    { className: "tab-bar show-for-small-only" },
                    React.createElement(
                        "section",
                        { className: "left-small" },
                        React.createElement(
                            "a",
                            { href: "#", role: "button", className: "left-off-canvas-toggle menu-icon" },
                            React.createElement("span", null)
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "middle tab-bar-section" },
                        "Recalbox"
                    )
                ),
                React.createElement(
                    "nav",
                    { className: "top-bar hide-for-small", "data-topbar": true, role: "navigation" },
                    React.createElement(
                        "ul",
                        { className: "title-area" },
                        React.createElement(
                            "li",
                            { className: "name" },
                            React.createElement(
                                "h1",
                                null,
                                React.createElement(
                                    Link,
                                    { to: "home" },
                                    "Recalbox Web Interface"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "top-bar-section" },
                        React.createElement(
                            "ul",
                            { className: "left" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    Link,
                                    { to: "configuration" },
                                    "Configuration"
                                )
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "right" },
                            React.createElement(
                                "li",
                                { className: "has-dropdown" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "English"
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "dropdown" },
                                    React.createElement(
                                        "li",
                                        { className: "active" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "English"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "Français"
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
})(React.Component);

exports["default"] = Header;
module.exports = exports["default"];


},{}],3:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _MainJsx = require("./Main.jsx");

var _MainJsx2 = _interopRequireDefault(_MainJsx);

var _pagesHomePageJsx = require("./pages/HomePage.jsx");

var _pagesHomePageJsx2 = _interopRequireDefault(_pagesHomePageJsx);

var _pagesConfigPageJsx = require("./pages/ConfigPage.jsx");

var _pagesConfigPageJsx2 = _interopRequireDefault(_pagesConfigPageJsx);

var _pagesConfigGeneralPageJsx = require("./pages/config/GeneralPage.jsx");

var _pagesConfigGeneralPageJsx2 = _interopRequireDefault(_pagesConfigGeneralPageJsx);

var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var HistoryLocation = ReactRouter.HistoryLocation;

var routes = React.createElement(
    Route,
    { name: "home", path: "/", handler: _MainJsx2["default"] },
    React.createElement(DefaultRoute, { handler: _pagesHomePageJsx2["default"] }),
    React.createElement(
        Route,
        { name: "configuration", path: "/configuration", handler: _pagesConfigPageJsx2["default"] },
        React.createElement(DefaultRoute, { handler: _pagesConfigGeneralPageJsx2["default"] })
    )
);

ReactRouter.run(routes, HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler, null), document.body);
});


},{"./Main.jsx":1,"./pages/ConfigPage.jsx":4,"./pages/HomePage.jsx":5,"./pages/config/GeneralPage.jsx":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

/**
 * The configuration page
 */

var ConfigPage = (function (_React$Component) {
    _inherits(ConfigPage, _React$Component);

    function ConfigPage() {
        _classCallCheck(this, ConfigPage);

        _get(Object.getPrototypeOf(ConfigPage.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(ConfigPage, [{
        key: "render",

        /**
         * render the component
         */
        value: function render() {
            return React.createElement(
                "div",
                { className: "layout" },
                React.createElement(
                    "aside",
                    { className: "layout__sidebar hide-for-small" },
                    React.createElement(
                        "ul",
                        { className: "side-nav" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                Link,
                                { to: "configuration" },
                                "General"
                            )
                        )
                    )
                ),
                React.createElement(
                    "main",
                    { className: "layout__content" },
                    React.createElement(RouteHandler, null)
                )
            );
        }
    }]);

    return ConfigPage;
})(React.Component);

exports["default"] = ConfigPage;
module.exports = exports["default"];


},{}],5:[function(require,module,exports){
/**
 * The homepage
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = (function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        _get(Object.getPrototypeOf(HomePage.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(HomePage, [{
        key: "render",

        /**
         * render the component
         */
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                ),
                React.createElement(
                    "p",
                    null,
                    "Homepage"
                )
            );
        }
    }]);

    return HomePage;
})(React.Component);

exports["default"] = HomePage;
module.exports = exports["default"];


},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteHandler = ReactRouter.RouteHandler;

/**
 * The general configuration
 */

var GeneralPage = (function (_React$Component) {
    _inherits(GeneralPage, _React$Component);

    function GeneralPage() {
        _classCallCheck(this, GeneralPage);

        _get(Object.getPrototypeOf(GeneralPage.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(GeneralPage, [{
        key: "render",

        /**
         * render the component
         */
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "General"
                ),
                React.createElement(
                    "p",
                    null,
                    "Lorem ipsum"
                )
            );
        }
    }]);

    return GeneralPage;
})(React.Component);

exports["default"] = GeneralPage;
module.exports = exports["default"];


},{}]},{},[3]);
