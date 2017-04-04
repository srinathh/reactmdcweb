import {MDCTextfield} from '@material/textfield/dist/mdc.textfield';
import React from 'react'
import classNames from 'classnames'


export class TextField extends React.Component{
    static propTypes = {
        disabled: React.PropTypes.bool,
        value: React.PropTypes.string,
        fullWidth: React.PropTypes.bool
    }

    constructor(props){
        super(props)
        this.node = null
        this.component = null
    }

    componentDidMount(){
        this.component= new MDCTextfield(this.node)
    }

    componentWillUnmount(){
        this.component.destroy()
    }

    render(){
        var {className,children, disabled, fullWidth, ...other} = this.props
        const classnames = classNames(
            'mdc-textfield',
            'mdc-textfield--upgraded',
            {
                'mdc-textfield--disabled':disabled,
                'mdc-textfield--fullwidth':fullWidth   
            },
            className
        )

        return(
            <div className={classnames} ref={input => this.node=input} {...other} >
                {children}
            </div>
        )
    }
}

export class TextFieldInput extends React.Component {
    render(){
        var {className, children, value, placeholder, type, ...other} = this.props 
        const classnames = classNames(
            'mdc-textfield__input',
            className
        )

        let addProps = {}
        if(typeof value !== 'undefined')
            addProps = Object.assign({},addProps,{value:value})
        if(typeof placeholder !== 'undefined')
            addProps = Object.assign({},addProps,{placeholder:placeholder})
        
        if(typeof type === 'undefined')
            type = "text"

     
        return(
            <input type={type} className={classnames} {...addProps} {...other} />
        )
    }
}