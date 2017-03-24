import React from 'react'
import classNames from 'classnames'

/*
<header class="mdc-toolbar">
  <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
    <a class="material-icons">menu</a>
    <span class="mdc-toolbar__title">Title</span>
  </section>
</header>
*/

export class Toolbar extends React.Component{
    static propTypes={
        fixed: React.PropTypes.bool
    }

    render(){
        var {fixed, className, children, ...other} = this.props

        if(typeof fixed === 'undefined')
            fixed = false

        const classnames = classNames(
            'mdc-toolbar',
            {'mdc-toolbar--fixed':fixed},
            className
        )

        return(
            <header className={classnames} {...other}>
                {children}
            </header>
        )
    }
}

export class ToolbarSection extends React.Component{
    static propTypes = {
        alignStart: React.PropTypes.bool,
        alignEnd: React.PropTypes.bool
    }

    render(){
        var {alignStart, alignEnd, className, children, ...other} = this.props

        // both alignStart and alignEnd should not be true at the same time
        // if they are both true, then we will prioritize alignStart
        if(typeof alignStart !== 'undefined' && typeof alignEnd !== 'undefined')
            if(alignStart === true && alignEnd === true)
                alignEnd = false    

        let classnames = classNames(
            'mdc-toolbar__section', 
            {
                'mdc-toolbar__section--align-start':alignStart,
                'mdc-toolbar__section--align-end': alignEnd
            },
            className
        )
        return(
            <section className={classnames} {...other}>
                {children}
            </section>
        )
    }
}

export class ToolbarTitle extends React.Component{
    render(){
        var {className, children, ...other} = this.props
        const classnames = classNames(
            'mdc-toolbar__title',
            className
        )
        return(
            <span className={classnames} {...other}>
                {children}
            </span>
        )
    }
}

export class Main extends React.Component{
    static propTypes = {
        fixedToolbarAdjust: React.PropTypes.bool
    }

    render(){
        var {fixedToolbarAdjust, children, className, ...others} = this.props

        const classnames = classNames(
            {'mdc-toolbar-fixed-adjust':fixedToolbarAdjust},
            className
        )

        return(
            <main className={classnames} {...other}>
                {children}
            </main>
        )
    }
}
