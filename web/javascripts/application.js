(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * The application header
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        _get(Object.getPrototypeOf(Header.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                null,
                React.createElement(
                    "nav",
                    { className: "top-bar", "data-topbar": true, role: "navigation" },
                    React.createElement(
                        "ul",
                        { className: "title-area" },
                        React.createElement(
                            "li",
                            { className: "name" },
                            React.createElement(
                                "h1",
                                null,
                                "Recalbox Web Interface"
                            )
                        ),
                        React.createElement(
                            "li",
                            { className: "toggle-topbar menu-icon" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement(
                                    "span",
                                    null,
                                    "Menu"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "top-bar-section" },
                        React.createElement(
                            "ul",
                            { className: "right" },
                            React.createElement(
                                "li",
                                { className: "active" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Right Button Active"
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


},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _HeaderJsx = require("./Header.jsx");

var _HeaderJsx2 = _interopRequireDefault(_HeaderJsx);

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
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(_HeaderJsx2["default"], null)
            );
        }
    }]);

    return Main;
})(React.Component);

exports["default"] = Main;
module.exports = exports["default"];


},{"./Header.jsx":1}],3:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _componentsMainJsx = require("./components/Main.jsx");

var _componentsMainJsx2 = _interopRequireDefault(_componentsMainJsx);

React.render(React.createElement(_componentsMainJsx2["default"], null), document.body);


},{"./components/Main.jsx":2}]},{},[3]);
