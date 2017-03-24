import React, { PropTypes } from 'react';
import classNames from 'classnames'

export class Button extends React.Component{
    static propTypes = {
        accent: PropTypes.bool,
        children: PropTypes.node,
        className: PropTypes.string,
        compact: PropTypes.bool,
        dense: PropTypes.bool,
        primary: PropTypes.bool,
        raised: PropTypes.bool,
    }

    render(){
        var {accent, className, children, compact, dense, primary, raised, ...other} = this.props
        const classnames = classNames({
            'mdc-button':true, 
            'mdc-button--accent': accent,
            'mdc-button--compact': compact,
            'mdc-button--dense': dense,
            'mdc-button--primary': primary,
            'mdc-button--raised': raised
        }, className);

        return (
            <button className={classnames} {...other} >
                {children}
            </button>
        );
    }

}
