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

var _materialTextfieldDistMdcTextfield = require('@material/textfield/dist/mdc.textfield');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var TextField = (function (_React$Component) {
    _inherits(TextField, _React$Component);

    _createClass(TextField, null, [{
        key: 'propTypes',
        value: {
            disabled: _react2['default'].PropTypes.bool,
            value: _react2['default'].PropTypes.string,
            fullWidth: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    function TextField(props) {
        _classCallCheck(this, TextField);

        _get(Object.getPrototypeOf(TextField.prototype), 'constructor', this).call(this, props);
        this.node = null;
        this.component = null;
    }

    _createClass(TextField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.component = new _materialTextfieldDistMdcTextfield.MDCTextfield(this.node);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.component.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var _props = this.props;
            var className = _props.className;
            var children = _props.children;
            var disabled = _props.disabled;
            var fullWidth = _props.fullWidth;

            var other = _objectWithoutProperties(_props, ['className', 'children', 'disabled', 'fullWidth']);

            var classnames = (0, _classnames2['default'])('mdc-textfield', 'mdc-textfield--upgraded', {
                'mdc-textfield--disabled': disabled,
                'mdc-textfield--fullwidth': fullWidth
            }, className);

            return _react2['default'].createElement(
                'div',
                _extends({ className: classnames, ref: function (input) {
                        return _this.node = input;
                    } }, other),
                children
            );
        }
    }]);

    return TextField;
})(_react2['default'].Component);

exports.TextField = TextField;

var TextFieldInput = (function (_React$Component2) {
    _inherits(TextFieldInput, _React$Component2);

    function TextFieldInput() {
        _classCallCheck(this, TextFieldInput);

        _get(Object.getPrototypeOf(TextFieldInput.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(TextFieldInput, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var className = _props2.className;
            var children = _props2.children;
            var value = _props2.value;
            var placeholder = _props2.placeholder;
            var type = _props2.type;

            var other = _objectWithoutProperties(_props2, ['className', 'children', 'value', 'placeholder', 'type']);

            var classnames = (0, _classnames2['default'])('mdc-textfield__input', className);

            var addProps = {};
            if (typeof value !== 'undefined') addProps = Object.assign({}, addProps, { value: value });
            if (typeof placeholder !== 'undefined') addProps = Object.assign({}, addProps, { placeholder: placeholder });

            if (typeof type === 'undefined') type = "text";

            return _react2['default'].createElement('input', _extends({ type: type, className: classnames }, addProps, other));
        }
    }]);

    return TextFieldInput;
})(_react2['default'].Component);

exports.TextFieldInput = TextFieldInput;