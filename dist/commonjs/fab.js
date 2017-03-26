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

var Fab = (function (_React$Component) {
    _inherits(Fab, _React$Component);

    function Fab() {
        _classCallCheck(this, Fab);

        _get(Object.getPrototypeOf(Fab.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Fab, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var mini = _props.mini;
            var plain = _props.plain;
            var bottomRight = _props.bottomRight;
            var className = _props.className;
            var children = _props.children;
            var style = _props.style;

            var other = _objectWithoutProperties(_props, ['mini', 'plain', 'bottomRight', 'className', 'children', 'style']);

            var classnames = (0, _classnames2['default'])('mdc-fab', {
                'mdc-fab--mini': mini,
                'mdc-fab--plain': plain
            }, className);

            if (typeof style === 'undefined') style = {};

            if (typeof bottomRight !== 'undefined') if (bottomRight) style = Object.assign({}, style, { position: "absolute", bottom: "1rem", "right": "1rem" });

            var newChildren = _react2['default'].Children.map(this.props.children, function (child) {
                var childclassnames = (0, _classnames2['default'])(child.props.className, 'mdc-fab__icon');
                var newprops = Object.assign({}, child.props, { className: childclassnames });
                return _react2['default'].cloneElement(child, newprops);
            });

            return _react2['default'].createElement(
                'button',
                _extends({ style: style, className: classnames }, other),
                newChildren
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            mini: _react2['default'].PropTypes.bool,
            plain: _react2['default'].PropTypes.bool,
            bottomRight: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    return Fab;
})(_react2['default'].Component);

exports.Fab = Fab;