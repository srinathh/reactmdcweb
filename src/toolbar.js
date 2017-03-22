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
    render(){
        var fixed = true
        if(!(this.props.fixed==null))
            fixed = this.props.fixed

        let classnames = classNames({
            'mdc-toolbar':true,
            'mdc-toolbar--fixed':fixed
        })
        return(
            <header className={classnames}>
                {this.props.children}
            </header>
        )
    }
}

Toolbar.propTypes = {
    fixed: React.PropTypes.bool
}

export class ToolbarSection extends React.Component{
    render(){

        var alignStart = false;
        var alignEnd = false;

        if(!(this.props.alignStart==null))
            alignStart = this.props.alignStart

        if(!(this.props.alignEnd==null))
            alignEnd = this.props.alignEnd


        let classnames = classNames({
            'mdc-toolbar__section':true,
            'mdc-toolbar__section--align-start':alignStart,
            'mdc-toolbar__section--align-end': alignEnd
        })
        return(
            <section className={classnames}>
                {this.props.children}
            </section>
        )
    }
}

ToolbarSection.propTypes = {
    alignStart: React.PropTypes.bool,
    alignEnd: React.PropTypes.bool
}

export class ToolbarTitle extends React.Component{
    render(){
        return(
            <span className="mdc-toolbar__title">
                {this.props.children}
            </span>
        )
    }
}

export class Main extends React.Component{
    render(){
        var fixedToolbar = false;

        if(!(this.props.fixedToolbar==null))
            fixedToolbar = this.props.fixedToolbar

        let classnames = classNames({
            'mdc-toolbar-fixed-adjust':fixedToolbar
        })

        return(
            <main className={classnames}>
                {this.props.children}
            </main>
        )
    }
}

Main.propTypes = {
    fixedToolbar: React.PropTypes.bool
}