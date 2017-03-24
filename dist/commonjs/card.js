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

var Card = (function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
        _classCallCheck(this, Card);

        _get(Object.getPrototypeOf(Card.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var horizontal = _props.horizontal;
            var className = _props.className;
            var themeDark = _props.themeDark;
            var children = _props.children;

            var other = _objectWithoutProperties(_props, ['horizontal', 'className', 'themeDark', 'children']);

            if ("undefined" === typeof horizontal) horizontal = false;

            var classnames = (0, _classnames2['default'])({
                'mdc-card': !horizontal,
                'mdc-card__horizontal-block': horizontal,
                'mdc-card--theme-dark': themeDark
            }, className);

            return _react2['default'].createElement(
                'div',
                _extends({ className: classnames }, other),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            themeDark: _react2['default'].PropTypes.bool,
            horizontal: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    return Card;
})(_react2['default'].Component);

exports.Card = Card;

var CardPrimary = (function (_React$Component2) {
    _inherits(CardPrimary, _React$Component2);

    function CardPrimary() {
        _classCallCheck(this, CardPrimary);

        _get(Object.getPrototypeOf(CardPrimary.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardPrimary, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var className = _props2.className;
            var children = _props2.children;

            var other = _objectWithoutProperties(_props2, ['className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-card__primary', className);

            return _react2['default'].createElement(
                'section',
                _extends({ className: classnames }, other),
                children
            );
        }
    }]);

    return CardPrimary;
})(_react2['default'].Component);

exports.CardPrimary = CardPrimary;

var CardTitle = (function (_React$Component3) {
    _inherits(CardTitle, _React$Component3);

    function CardTitle() {
        _classCallCheck(this, CardTitle);

        _get(Object.getPrototypeOf(CardTitle.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardTitle, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var className = _props3.className;
            var large = _props3.large;
            var children = _props3.children;

            var other = _objectWithoutProperties(_props3, ['className', 'large', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-card__title', { 'mdc-card__title--large': large }, className);
            return _react2['default'].createElement(
                'div',
                _extends({ className: classnames }, other),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            large: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    return CardTitle;
})(_react2['default'].Component);

exports.CardTitle = CardTitle;

var CardSubTitle = (function (_React$Component4) {
    _inherits(CardSubTitle, _React$Component4);

    function CardSubTitle() {
        _classCallCheck(this, CardSubTitle);

        _get(Object.getPrototypeOf(CardSubTitle.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardSubTitle, [{
        key: 'render',
        value: function render() {
            var _props4 = this.props;
            var className = _props4.className;
            var children = _props4.children;

            var other = _objectWithoutProperties(_props4, ['className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-card__subtitle', className);

            return _react2['default'].createElement(
                'div',
                _extends({ className: classnames }, other),
                children
            );
        }
    }]);

    return CardSubTitle;
})(_react2['default'].Component);

exports.CardSubTitle = CardSubTitle;

var CardActions = (function (_React$Component5) {
    _inherits(CardActions, _React$Component5);

    function CardActions() {
        _classCallCheck(this, CardActions);

        _get(Object.getPrototypeOf(CardActions.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardActions, [{
        key: 'render',
        value: function render() {
            var _props5 = this.props;
            var className = _props5.className;
            var vertical = _props5.vertical;
            var children = _props5.children;

            var other = _objectWithoutProperties(_props5, ['className', 'vertical', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-card__actions', { 'mdc-card__actions--vertical': vertical }, className);

            var newChildren = _react2['default'].Children.map(this.props.children, function (child) {
                var childclassnames = (0, _classnames2['default'])(child.props.className, { 'mdc-card__action': true });
                var newprops = Object.assign({}, child.props, { className: childclassnames });
                return _react2['default'].cloneElement(child, newprops);
            });

            return _react2['default'].createElement(
                'section',
                _extends({ className: classnames }, other),
                newChildren
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            vertical: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    return CardActions;
})(_react2['default'].Component);

exports.CardActions = CardActions;

var CardSupportingText = (function (_React$Component6) {
    _inherits(CardSupportingText, _React$Component6);

    function CardSupportingText() {
        _classCallCheck(this, CardSupportingText);

        _get(Object.getPrototypeOf(CardSupportingText.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardSupportingText, [{
        key: 'render',
        value: function render() {
            var _props6 = this.props;
            var className = _props6.className;
            var children = _props6.children;

            var other = _objectWithoutProperties(_props6, ['className', 'children']);

            var classnames = (0, _classnames2['default'])('mdc-card__supporting-text', className);
            return _react2['default'].createElement(
                'section',
                _extends({ className: classnames }, other),
                children
            );
        }
    }]);

    return CardSupportingText;
})(_react2['default'].Component);

exports.CardSupportingText = CardSupportingText;

var CardMediaItem = (function (_React$Component7) {
    _inherits(CardMediaItem, _React$Component7);

    function CardMediaItem() {
        _classCallCheck(this, CardMediaItem);

        _get(Object.getPrototypeOf(CardMediaItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardMediaItem, [{
        key: 'render',
        value: function render() {
            var _props7 = this.props;
            var src = _props7.src;
            var size = _props7.size;
            var className = _props7.className;
            var children = _props7.children;

            var other = _objectWithoutProperties(_props7, ['src', 'size', 'className', 'children']);

            var sizeClass = "mdc-card__media-item--1x";
            if (typeof size !== 'undefined') {
                switch (size) {
                    case "1dot5x":
                        sizeClass = "mdc-card__media-item--1dot5x";
                        break;
                    case "2x":
                        sizeClass = "mdc-card__media-item--2x";
                        break;
                    case "3x":
                        sizeClass = "mdc-card__media-item--3x";
                        break;
                    default:
                        sizeClass = "mdc-card__media-item--1x";
                }
            }

            var classnames = (0, _classnames2['default'])("mdc-card__media-item", sizeClass, className);

            return _react2['default'].createElement(
                'img',
                _extends({ className: classnames, src: src }, other),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            src: _react2['default'].PropTypes.string.isRequired,
            size: _react2['default'].PropTypes.string
        },
        enumerable: true
    }]);

    return CardMediaItem;
})(_react2['default'].Component);

exports.CardMediaItem = CardMediaItem;