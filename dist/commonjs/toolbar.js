'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
            var _props = this.props;
            var fixed = _props.fixed;
            var className = _props.className;
            var children = _props.children;

            var other = _objectWithoutProperties(_props, ['fixed', 'className', 'children']);

            if (typeof fixed === 'undefined') fixed = false;

            var classnames = (0, _classnames2['default'])('mdc-toolbar', { 'mdc-toolbar--fixed': fixed }, className);

            return _react2['default'].createElement(
                'header',
                _extends({ className: classnames }, other),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            fixed: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    return Toolbar;
})(_react2['default'].Component);

exports.Toolbar = Toolbar;

var ToolbarRow = (function (_React$Component2) {
    _inherits(ToolbarRow, _React$Component2);

    function ToolbarRow() {
        _classCallCheck(this, ToolbarRow);

        _get(Object.getPrototypeOf(ToolbarRow.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ToolbarRow, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var className = _props2.className;
            var children = _props2.children;

            var other = _objectWithoutProperties(_props2, ['className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-toolbar__row', className);
            return _react2['default'].createElement(
                'div',
                _extends({ className: classnames }, other),
                children
            );
        }
    }]);

    return ToolbarRow;
})(_react2['default'].Component);

exports.ToolbarRow = ToolbarRow;

var ToolbarSection = (function (_React$Component3) {
    _inherits(ToolbarSection, _React$Component3);

    function ToolbarSection() {
        _classCallCheck(this, ToolbarSection);

        _get(Object.getPrototypeOf(ToolbarSection.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ToolbarSection, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var alignStart = _props3.alignStart;
            var alignEnd = _props3.alignEnd;
            var className = _props3.className;
            var children = _props3.children;

            var other = _objectWithoutProperties(_props3, ['alignStart', 'alignEnd', 'className', 'children']);

            // both alignStart and alignEnd should not be true at the same time
            // if they are both true, then we will prioritize alignStart
            if (typeof alignStart !== 'undefined' && typeof alignEnd !== 'undefined') if (alignStart === true && alignEnd === true) alignEnd = false;

            var classnames = (0, _classnames2['default'])('mdc-toolbar__section', {
                'mdc-toolbar__section--align-start': alignStart,
                'mdc-toolbar__section--align-end': alignEnd
            }, className);
            return _react2['default'].createElement(
                'section',
                _extends({ className: classnames }, other),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            alignStart: _react2['default'].PropTypes.bool,
            alignEnd: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    return ToolbarSection;
})(_react2['default'].Component);

exports.ToolbarSection = ToolbarSection;

var ToolbarTitle = (function (_React$Component4) {
    _inherits(ToolbarTitle, _React$Component4);

    function ToolbarTitle() {
        _classCallCheck(this, ToolbarTitle);

        _get(Object.getPrototypeOf(ToolbarTitle.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ToolbarTitle, [{
        key: 'render',
        value: function render() {
            var _props4 = this.props;
            var className = _props4.className;
            var children = _props4.children;

            var other = _objectWithoutProperties(_props4, ['className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-toolbar__title', className);
            return _react2['default'].createElement(
                'span',
                _extends({ className: classnames }, other),
                children
            );
        }
    }]);

    return ToolbarTitle;
})(_react2['default'].Component);

exports.ToolbarTitle = ToolbarTitle;

var Main = (function (_React$Component5) {
    _inherits(Main, _React$Component5);

    function Main() {
        _classCallCheck(this, Main);

        _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            var _props5 = this.props;
            var fixedToolbarAdjust = _props5.fixedToolbarAdjust;
            var children = _props5.children;
            var className = _props5.className;

            var other = _objectWithoutProperties(_props5, ['fixedToolbarAdjust', 'children', 'className']);

            var classnames = (0, _classnames2['default'])({ 'mdc-toolbar-fixed-adjust': fixedToolbarAdjust }, className);

            return _react2['default'].createElement(
                'main',
                _extends({ className: classnames }, other),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            fixedToolbarAdjust: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    return Main;
})(_react2['default'].Component);

exports.Main = Main;