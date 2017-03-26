import {MDCTemporaryDrawer} from '@material/drawer/dist/mdc.drawer';
import React from 'react'
import classNames from 'classnames'

export class TemporaryDrawer extends React.Component{
    constructor(props){
        super(props)
        this.drawerNode = null
        this.drawerComponent = null
        this.open = this.open.bind(this)
    }

    open(){
        this.drawerComponent.open = true
    }

    componentDidMount(){
        this.drawerComponent = new MDCTemporaryDrawer(this.drawerNode)
        this.drawerComponent.open = this.props.open
    }

    componentWillUnmount(){
        this.drawerComponent.destroy()
    }

    render(){
        const {className,children, ...other} = this.props
        const classnames = classNames(
            'mdc-temporary-drawer',
            'mdc-typography',
            className
        )

        return(
            <aside className={classnames} ref={input => this.drawerNode=input} {...other} >
                    <nav className="mdc-temporary-drawer__drawer">
                        {children}
                    </nav>
            </aside>
        )
    }
}

export class TemporaryDrawerContent extends React.Component{
    render(){
        const {className, children, ...other} = this.props
        const classnames = classNames(
            'mdc-temporary-drawer__content',
            className
        )
        return(
            <nav className={classnames} {...other}>
                {children}
            </nav>
        )
    }
}