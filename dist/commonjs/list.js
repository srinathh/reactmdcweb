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

var List = (function (_React$Component) {
    _inherits(List, _React$Component);

    function List() {
        _classCallCheck(this, List);

        _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var dense = _props.dense;
            var twoLine = _props.twoLine;
            var avatarList = _props.avatarList;
            var className = _props.className;
            var children = _props.children;

            var other = _objectWithoutProperties(_props, ['dense', 'twoLine', 'avatarList', 'className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-list', {
                'mdc-list--dense': dense,
                'mdc-list--two-line': twoLine,
                'mdc-list--avatar-list': avatarList
            }, className);
            return _react2['default'].createElement(
                'ul',
                _extends({ className: classnames }, other),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            dense: _react2['default'].PropTypes.bool,
            twoLine: _react2['default'].PropTypes.bool,
            avatarList: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    return List;
})(_react2['default'].Component);

exports.List = List;

var ListItem = (function (_React$Component2) {
    _inherits(ListItem, _React$Component2);

    function ListItem() {
        _classCallCheck(this, ListItem);

        _get(Object.getPrototypeOf(ListItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var className = _props2.className;
            var children = _props2.children;

            var other = _objectWithoutProperties(_props2, ['className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-list-item', className);
            return _react2['default'].createElement(
                'li',
                _extends({ className: classnames }, other),
                children
            );
        }
    }]);

    return ListItem;
})(_react2['default'].Component);

exports.ListItem = ListItem;

var ListItemText = (function (_React$Component3) {
    _inherits(ListItemText, _React$Component3);

    function ListItemText() {
        _classCallCheck(this, ListItemText);

        _get(Object.getPrototypeOf(ListItemText.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ListItemText, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var secondary = _props3.secondary;
            var noLeftAlign = _props3.noLeftAlign;
            var className = _props3.className;
            var children = _props3.children;

            var other = _objectWithoutProperties(_props3, ['secondary', 'noLeftAlign', 'className', 'children']);

            var styling = { textAlign: "left" };

            if (typeof noLeftAlign !== 'undefined') if (noLeftAlign) styling = {};

            var classnames = (0, _classnames2['default'])({
                'mdc-list-item__text': !secondary,
                'mdc-list-item__text__secondary': secondary
            }, className);
            return _react2['default'].createElement(
                'span',
                _extends({ style: styling, className: classnames }, other),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            secondary: _react2['default'].PropTypes.bool,
            noLeftAlign: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    return ListItemText;
})(_react2['default'].Component);

exports.ListItemText = ListItemText;