'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/*
<header class="mdc-toolbar">
  <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
    <a class="material-icons">menu</a>
    <span class="mdc-toolbar__title">Title</span>
  </section>
</header>
*/

var Toolbar = (function (_React$Component) {
    _inherits(Toolbar, _React$Component);

    function Toolbar() {
        _classCallCheck(this, Toolbar);

        _get(Object.getPrototypeOf(Toolbar.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Toolbar, [{
        key: 'render',
        value: function render() {
            var fixed = true;
            if (!(this.props.fixed == null)) fixed = this.props.fixed;

            var classnames = (0, _classnames2['default'])({
                'mdc-toolbar': true,
                'mdc-toolbar--fixed': fixed
            });
            return _react2['default'].createElement(
                'header',
                { className: classnames },
                this.props.children
            );
        }
    }]);

    return Toolbar;
})(_react2['default'].Component);

exports.Toolbar = Toolbar;

Toolbar.propTypes = {
    fixed: _react2['default'].PropTypes.bool
};

var ToolbarSection = (function (_React$Component2) {
    _inherits(ToolbarSection, _React$Component2);

    function ToolbarSection() {
        _classCallCheck(this, ToolbarSection);

        _get(Object.getPrototypeOf(ToolbarSection.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ToolbarSection, [{
        key: 'render',
        value: function render() {

            var alignStart = false;
            var alignEnd = false;

            if (!(this.props.alignStart == null)) alignStart = this.props.alignStart;

            if (!(this.props.alignEnd == null)) alignEnd = this.props.alignEnd;

            var classnames = (0, _classnames2['default'])({
                'mdc-toolbar__section': true,
                'mdc-toolbar__section--align-start': alignStart,
                'mdc-toolbar__section--align-end': alignEnd
            });
            return _react2['default'].createElement(
                'section',
                { className: classnames },
                this.props.children
            );
        }
    }]);

    return ToolbarSection;
})(_react2['default'].Component);

exports.ToolbarSection = ToolbarSection;

ToolbarSection.propTypes = {
    alignStart: _react2['default'].PropTypes.bool,
    alignEnd: _react2['default'].PropTypes.bool
};

var ToolbarTitle = (function (_React$Component3) {
    _inherits(ToolbarTitle, _React$Component3);

    function ToolbarTitle() {
        _classCallCheck(this, ToolbarTitle);

        _get(Object.getPrototypeOf(ToolbarTitle.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ToolbarTitle, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'span',
                { className: 'mdc-toolbar__title' },
                this.props.children
            );
        }
    }]);

    return ToolbarTitle;
})(_react2['default'].Component);

exports.ToolbarTitle = ToolbarTitle;

var Main = (function (_React$Component4) {
    _inherits(Main, _React$Component4);

    function Main() {
        _classCallCheck(this, Main);

        _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            var fixedToolbar = false;

            if (!(this.props.fixedToolbar == null)) fixedToolbar = this.props.fixedToolbar;

            var classnames = (0, _classnames2['default'])({
                'mdc-toolbar-fixed-adjust': fixedToolbar
            });

            return _react2['default'].createElement(
                'main',
                { className: classnames },
                this.props.children
            );
        }
    }]);

    return Main;
})(_react2['default'].Component);

exports.Main = Main;

Main.propTypes = {
    fixedToolbar: _react2['default'].PropTypes.bool
};