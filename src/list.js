import React from 'react';
import classNames from 'classnames'


export class List extends React.Component{
    static propTypes = {
        dense: React.PropTypes.bool,
        twoLine: React.PropTypes.bool,
        avatarList: React.PropTypes.bool
    }

    render(){
        const {dense, twoLine, avatarList, className, children, ...other} = this.props
        const classnames = classNames(
            'mdc-list',
            {
                'mdc-list--dense':dense,
                'mdc-list--two-line':twoLine,
                'mdc-list--avatar-list':avatarList
            },
            className
        ) 
        return(
            <ul className={classnames} {...other}>
                {children}
            </ul>
        )
    }
}

export class ListItem extends React.Component{
    render(){
        const {className, children, ...other} = this.props 
        const classnames = classNames(
            'mdc-list-item',
            className
        )
        return(
            <li className={classnames} {...other}>
                {children}
            </li>
        )
    }
}

