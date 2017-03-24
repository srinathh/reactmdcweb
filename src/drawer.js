import {MDCTemporaryDrawer} from '@material/drawer/dist/mdc.drawer';
import React from 'react'

export class TemporaryDrawer extends React.Component{
    static propTypes = {
        trigger: React.PropTypes.node
    }
    constructor(props){
        super(props)
        this.drawerRoot = null
        this.drawer = null
    }

    componentDidMount(){
        this.drawer = new MDCTemporaryDrawer(this.drawerRoot)
    }
    componentWillUnmount(){
        this.drawer.destroy()
    }
    render(){
        var trigger = (<i className="material-icons" >menu</i>)
        if(!(this.props.trigger==null))
            trigger = this.props.trigger
        

        return(
            <div>
                <div style={{paddingRight:"16px"}} onClick={(e)=>{this.drawer.open=true}}>
                    {trigger}             
                </div>
                <aside ref={input => this.drawerRoot= input} className="mdc-temporary-drawer mdc-typography">
                    <nav className="mdc-temporary-drawer__drawer">
                        {this.props.children}
                    </nav>
                </aside>
            </div>
        )        
    }
}

