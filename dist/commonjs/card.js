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

var Card = (function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
        _classCallCheck(this, Card);

        _get(Object.getPrototypeOf(Card.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            var vertCard = true;
            var horiCard = false;
            if (!(this.props.horizontal == null)) {
                if (this.props.horizontal) {
                    vertCard = false;
                    horiCard = true;
                }
            }

            var cardClasses = (0, _classnames2['default'])({
                'mdc-card': vertCard,
                'mdc-card__horizontal-block': horiCard,
                'mdc-card--theme-dark': this.props.themeDark
            });
            return _react2['default'].createElement(
                'div',
                { className: cardClasses },
                this.props.children
            );
        }
    }]);

    return Card;
})(_react2['default'].Component);

exports.Card = Card;

Card.propTypes = {
    themeDark: _react2['default'].PropTypes.bool,
    horizontal: _react2['default'].PropTypes.bool
};

var CardPrimary = (function (_React$Component2) {
    _inherits(CardPrimary, _React$Component2);

    function CardPrimary() {
        _classCallCheck(this, CardPrimary);

        _get(Object.getPrototypeOf(CardPrimary.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardPrimary, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'section',
                { className: 'mdc-card__primary' },
                this.props.children
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
            return _react2['default'].createElement(
                'div',
                { className: 'mdc-card__title mdc-card__title--large' },
                this.props.children
            );
        }
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
            return _react2['default'].createElement(
                'div',
                { className: 'mdc-card__subtitle' },
                this.props.children
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
            var classes = (0, _classnames2['default'])({
                'mdc-card__actions': true,
                'mdc-card__actions--vertical': this.props.vertical
            });
            return _react2['default'].createElement(
                'section',
                { className: classes },
                this.props.children
            );
        }
    }]);

    return CardActions;
})(_react2['default'].Component);

exports.CardActions = CardActions;

CardActions.propTypes = {
    vertical: _react2['default'].PropTypes.bool
};

var CardActionButton = (function (_React$Component6) {
    _inherits(CardActionButton, _React$Component6);

    function CardActionButton() {
        _classCallCheck(this, CardActionButton);

        _get(Object.getPrototypeOf(CardActionButton.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardActionButton, [{
        key: 'render',
        value: function render() {
            var disabled = false;
            if (!(this.props.disabled == null)) {
                disabled = this.props.disabled;
            }
            var classes = (0, _classnames2['default'])({
                'mdc-button': true,
                'mdc-button--compact': true,
                'mdc-card__action': true,
                'mdc-button--primary': this.props.primary,
                'mdc-button--accent': this.props.accent,
                'mdc-button--raised': this.props.raised
            });

            return _react2['default'].createElement(
                'button',
                { className: classes, disabled: disabled },
                this.props.children
            );
        }
    }]);

    return CardActionButton;
})(_react2['default'].Component);

exports.CardActionButton = CardActionButton;

CardActionButton.propTypes = {
    primary: _react2['default'].PropTypes.bool,
    accent: _react2['default'].PropTypes.bool,
    raised: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool
};

var CardSupportingText = (function (_React$Component7) {
    _inherits(CardSupportingText, _React$Component7);

    function CardSupportingText() {
        _classCallCheck(this, CardSupportingText);

        _get(Object.getPrototypeOf(CardSupportingText.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardSupportingText, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'section',
                { className: 'mdc-card__supporting-text' },
                this.props.children
            );
        }
    }]);

    return CardSupportingText;
})(_react2['default'].Component);

exports.CardSupportingText = CardSupportingText;

var CardMediaItem = (function (_React$Component8) {
    _inherits(CardMediaItem, _React$Component8);

    function CardMediaItem() {
        _classCallCheck(this, CardMediaItem);

        _get(Object.getPrototypeOf(CardMediaItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardMediaItem, [{
        key: 'render',
        value: function render() {

            var size = 1;
            if (!(this.props.size == null)) {
                size = this.props.size;
            }

            var modClass = "mdc-card__media-item--1x";
            switch (size) {
                case 1.5:
                    modClass = "mdc-card__media-item--1dot5x";
                    break;
                case 2:
                    modClass = "mdc-card__media-item--2x";
                    break;
                case 3:
                    modClass = "mdc-card__media-item--3x";
                    break;
                default:
                    modClass = "mdc-card__media-item--1x";
            }
            var classes = "mdc-card__media-item".concat(' ').concat(modClass);

            return _react2['default'].createElement('img', { 'class': classes, src: this.props.src });
        }
    }]);

    return CardMediaItem;
})(_react2['default'].Component);

exports.CardMediaItem = CardMediaItem;

CardMediaItem.propTypes = {
    src: _react2['default'].PropTypes.string.isRequired,
    size: _react2['default'].PropTypes.number
};