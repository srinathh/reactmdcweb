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

var _materialDrawerDistMdcDrawer = require('@material/drawer/dist/mdc.drawer');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var TemporaryDrawer = (function (_React$Component) {
    _inherits(TemporaryDrawer, _React$Component);

    function TemporaryDrawer(props) {
        _classCallCheck(this, TemporaryDrawer);

        _get(Object.getPrototypeOf(TemporaryDrawer.prototype), 'constructor', this).call(this, props);
        this.drawerNode = null;
        this.drawerComponent = null;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    _createClass(TemporaryDrawer, [{
        key: 'open',
        value: function open() {
            this.drawerComponent.open = true;
        }
    }, {
        key: 'close',
        value: function close() {
            this.drawerComponent.open = false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.drawerComponent = new _materialDrawerDistMdcDrawer.MDCTemporaryDrawer(this.drawerNode);
            this.drawerComponent.open = this.props.open;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.drawerComponent.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var _props = this.props;
            var className = _props.className;
            var children = _props.children;

            var other = _objectWithoutProperties(_props, ['className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-temporary-drawer', 'mdc-typography', className);

            return _react2['default'].createElement(
                'aside',
                _extends({ className: classnames, ref: function (input) {
                        return _this.drawerNode = input;
                    } }, other),
                _react2['default'].createElement(
                    'nav',
                    { className: 'mdc-temporary-drawer__drawer' },
                    children
                )
            );
        }
    }]);

    return TemporaryDrawer;
})(_react2['default'].Component);

exports.TemporaryDrawer = TemporaryDrawer;

var TemporaryDrawerContent = (function (_React$Component2) {
    _inherits(TemporaryDrawerContent, _React$Component2);

    function TemporaryDrawerContent() {
        _classCallCheck(this, TemporaryDrawerContent);

        _get(Object.getPrototypeOf(TemporaryDrawerContent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(TemporaryDrawerContent, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var className = _props2.className;
            var children = _props2.children;

            var other = _objectWithoutProperties(_props2, ['className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-temporary-drawer__content', className);
            return _react2['default'].createElement(
                'nav',
                _extends({ className: classnames }, other),
                children
            );
        }
    }]);

    return TemporaryDrawerContent;
})(_react2['default'].Component);

exports.TemporaryDrawerContent = TemporaryDrawerContent;

var TemporaryDrawerToolbarSpacer = (function (_React$Component3) {
    _inherits(TemporaryDrawerToolbarSpacer, _React$Component3);

    function TemporaryDrawerToolbarSpacer() {
        _classCallCheck(this, TemporaryDrawerToolbarSpacer);

        _get(Object.getPrototypeOf(TemporaryDrawerToolbarSpacer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(TemporaryDrawerToolbarSpacer, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var className = _props3.className;
            var children = _props3.children;

            var other = _objectWithoutProperties(_props3, ['className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-temporary-drawer__toolbar-spacer', className);
            return _react2['default'].createElement(
                'div',
                _extends({ className: classnames }, other),
                children
            );
        }
    }]);

    return TemporaryDrawerToolbarSpacer;
})(_react2['default'].Component);

exports.TemporaryDrawerToolbarSpacer = TemporaryDrawerToolbarSpacer;