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

var Button = (function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var accent = _props.accent;
            var className = _props.className;
            var children = _props.children;
            var compact = _props.compact;
            var dense = _props.dense;
            var primary = _props.primary;
            var raised = _props.raised;

            var other = _objectWithoutProperties(_props, ['accent', 'className', 'children', 'compact', 'dense', 'primary', 'raised']);

            var classnames = (0, _classnames2['default'])({
                'mdc-button': true,
                'mdc-button--accent': accent,
                'mdc-button--compact': compact,
                'mdc-button--dense': dense,
                'mdc-button--primary': primary,
                'mdc-button--raised': raised
            }, className);

            return _react2['default'].createElement(
                'button',
                _extends({ className: classnames }, other),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            accent: _react.PropTypes.bool,
            children: _react.PropTypes.node,
            className: _react.PropTypes.string,
            compact: _react.PropTypes.bool,
            dense: _react.PropTypes.bool,
            primary: _react.PropTypes.bool,
            raised: _react.PropTypes.bool
        },
        enumerable: true
    }]);

    return Button;
})(_react2['default'].Component);

exports.Button = Button;