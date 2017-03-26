import React from 'react';
import classNames from 'classnames';


export class Fab extends React.Component{

    static propTypes = {
        mini: React.PropTypes.bool,
        plain: React.PropTypes.bool,
        bottomRight: React.PropTypes.bool
    }

    render(){

        var {mini, plain, bottomRight, className, children, style, ...other} = this.props

        const classnames = classNames(
            'mdc-fab',
            {
                'mdc-fab--mini':mini,
                'mdc-fab--plain':plain
            },
            className
        )

        if(typeof style === 'undefined')
            style = {}

        if(typeof bottomRight !== 'undefined')
            if(bottomRight)
                style = Object.assign({},style,{position: "absolute", bottom: "1rem", "right": "1rem"})

        const newChildren = React.Children.map(this.props.children, child=>{
            const childclassnames = classNames(
                child.props.className,
                'mdc-fab__icon'
            )
            const newprops = Object.assign({},child.props,{className:childclassnames})
            return React.cloneElement(child, newprops)
        })

        return(
            <button style={style} className={classnames} {...other}>
                {newChildren}
            </button>
        )
    }
}