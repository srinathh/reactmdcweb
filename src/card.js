import React from 'react';
import classNames from 'classnames'

export class Card extends React.Component{
    render(){
        var vertCard = true
        var horiCard = false
        if(!(this.props.horizontal==null)){
            if(this.props.horizontal){
                vertCard = false 
                horiCard = true
            }
        }

        let cardClasses = classNames({
            'mdc-card':vertCard,
            'mdc-card__horizontal-block':horiCard,
            'mdc-card--theme-dark':this.props.themeDark
        })
        return(
            <div className={cardClasses}>
                {this.props.children}
            </div>
        )
    }
}

Card.propTypes = {
    themeDark: React.PropTypes.bool, 
    horizontal:React.PropTypes.bool
}

export class CardPrimary extends React.Component{
    render(){
        return(
            <section className="mdc-card__primary">
                {this.props.children}
            </section>
        )
    }
}

export class CardTitle extends React.Component{
    render(){
        return(
            <div className="mdc-card__title mdc-card__title--large">
                {this.props.children}
            </div>
        )
    }
}

export class CardSubTitle extends React.Component{
    render(){
        return(
            <div className="mdc-card__subtitle">
                {this.props.children}
            </div>
        )
    }
}


export class CardActions extends React.Component{
    render(){
        let classes = classNames({
            'mdc-card__actions':true,
            'mdc-card__actions--vertical':this.props.vertical
        })
        return(
            <section className={classes}>
                {this.props.children}
            </section>
        )
    }    
}

CardActions.propTypes = {
    vertical: React.PropTypes.bool
}

export class CardActionButton extends React.Component{
    render(){
        var disabled = false;
        if(!(this.props.disabled==null)){
            disabled = this.props.disabled
        }
        let classes = classNames({
            'mdc-button':true,
            'mdc-button--compact':true,
            'mdc-card__action':true,
            'mdc-button--primary':this.props.primary,
            'mdc-button--accent':this.props.accent,
            'mdc-button--raised':this.props.raised
        })

        return(
            <button className={classes} disabled={disabled}>
                {this.props.children}
            </button>
        )
    }
}

CardActionButton.propTypes = {
    primary: React.PropTypes.bool,
    accent: React.PropTypes.bool,
    raised: React.PropTypes.bool,
    disabled: React.PropTypes.bool
}


export class CardSupportingText extends React.Component{
    render(){
        return(
            <section className="mdc-card__supporting-text">
                {this.props.children}
            </section>
        )
    }
}

export class CardMediaItem extends React.Component{
    render(){


        var modClass = "mdc-card__media-item--1x"
        if(!(this.props.size==null)){
            switch (this.props.size){
                case "1dot5x":
                    modClass = "mdc-card__media-item--1dot5x"
                    break
                case "2x":
                    modClass = "mdc-card__media-item--2x"
                    break
                case "3x":
                    modClass = "mdc-card__media-item--3x"
                    break
                default:
                    modClass = "mdc-card__media-item--1x"
            }
        }

        let classes = "mdc-card__media-item".concat(' ').concat(modClass)

        return(
            <img className={classes} src={this.props.src}></img>
        )
    }
}

CardMediaItem.propTypes = {
    src:React.PropTypes.string.isRequired,
    size: React.PropTypes.string
}