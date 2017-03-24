'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _materialDrawerDistMdcDrawer = require('@material/drawer/dist/mdc.drawer');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TemporaryDrawer = (function (_React$Component) {
    _inherits(TemporaryDrawer, _React$Component);

    _createClass(TemporaryDrawer, null, [{
        key: 'propTypes',
        value: {
            trigger: _react2['default'].PropTypes.node
        },
        enumerable: true
    }]);

    function TemporaryDrawer(props) {
        _classCallCheck(this, TemporaryDrawer);

        _get(Object.getPrototypeOf(TemporaryDrawer.prototype), 'constructor', this).call(this, props);
        this.drawerRoot = null;
        this.drawer = null;
    }

    _createClass(TemporaryDrawer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.drawer = new _materialDrawerDistMdcDrawer.MDCTemporaryDrawer(this.drawerRoot);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.drawer.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var trigger = _react2['default'].createElement(
                'i',
                { className: 'material-icons' },
                'menu'
            );
            if (!(this.props.trigger == null)) trigger = this.props.trigger;

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { style: { paddingRight: "16px" }, onClick: function (e) {
                            _this.drawer.open = true;
                        } },
                    trigger
                ),
                _react2['default'].createElement(
                    'aside',
                    { ref: function (input) {
                            return _this.drawerRoot = input;
                        }, className: 'mdc-temporary-drawer mdc-typography' },
                    _react2['default'].createElement(
                        'nav',
                        { className: 'mdc-temporary-drawer__drawer' },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return TemporaryDrawer;
})(_react2['default'].Component);

exports.TemporaryDrawer = TemporaryDrawer;