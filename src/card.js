import React from 'react';
import classNames from 'classnames'

export class Card extends React.Component{
    static propTypes = {
        themeDark: React.PropTypes.bool, 
        horizontal:React.PropTypes.bool
    }

    render(){
        var { horizontal, className, themeDark, children, ...other } = this.props;

        if("undefined" === typeof horizontal)
            horizontal = false

        const classnames = classNames({
            'mdc-card':!horizontal,
            'mdc-card__horizontal-block':horizontal,
            'mdc-card--theme-dark':themeDark
        }, className)

        return(
            <div className={classnames} {...other}>
                {children}
            </div>
        )
    }
}


export class CardPrimary extends React.Component{i
    render(){
        var { className, children, ...other } = this.props;
        const classnames = classNames(
            'mdc-card__primary',
            className
        )

        return(
            <section className={classnames} {...other}>
                {children}
            </section>
        )
    }
}

export class CardTitle extends React.Component{
    static propTypes = {
        large: React.PropTypes.bool
    }

    render(){
        var { className, large, children, ...other } = this.props;

        const classnames = classNames(
            'mdc-card__title',
            {'mdc-card__title--large':large},
            className
        )
        return(
            <div className={classnames} {...other}>
                {children}
            </div>
        )
    }
}

export class CardSubTitle extends React.Component{
    render(){
        var { className, children, ...other } = this.props;
        const classnames = classNames(
            'mdc-card__subtitle',
            className
        )

        return(
            <div className={classnames} {...other}>
                {children}
            </div>
        )
    }
}

export class CardActions extends React.Component{
    static propTypes = {
        vertical: React.PropTypes.bool
    }

    render(){
        var {className, vertical, children, ...other } = this.props;
        const classnames = classNames(
            'mdc-card__actions',
            {'mdc-card__actions--vertical':vertical},
            className
        )

        const newChildren = React.Children.map(this.props.children, child=>{
            const childclassnames = classNames(
                child.props.className,
                { 'mdc-card__action':true }
            )
            const newprops = Object.assign({},child.props,{className:childclassnames})
            return React.cloneElement(child, newprops)
        })

        return(
            <section className={classnames} {...other}>
                {newChildren}
            </section>
        )
    }    
}

export class CardSupportingText extends React.Component{
    render(){
        var {className, children, ...other} = this.props;
        const classnames = classNames(
            'mdc-card__supporting-text',
            className
        )
        return(
            <section className={classnames} {...other}>
                {children}
            </section>
        )
    }
}

export class CardMediaItem extends React.Component{
    static propTypes = {
        src:React.PropTypes.string.isRequired,
        size: React.PropTypes.string
    }

    render(){

        var {src, size, className, children, ...other} = this.props

        var sizeClass = "mdc-card__media-item--1x"
        if(typeof size !== 'undefined'){
            switch (size){
                case "1dot5x":
                    sizeClass = "mdc-card__media-item--1dot5x"
                    break
                case "2x":
                    sizeClass = "mdc-card__media-item--2x"
                    break
                case "3x":
                    sizeClass = "mdc-card__media-item--3x"
                    break
                default:
                    sizeClass = "mdc-card__media-item--1x"
            }
        }

        const classnames = classNames(
            "mdc-card__media-item",
            sizeClass,
            className
        )

        return(
            <img className={classnames} src={src} {...other}>
                {children}
            </img>
        )
    }
}
