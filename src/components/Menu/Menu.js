import React from "react"

import "./Menu.css"

export default class Menu extends React.Component {
    state = { menuHeight: "is-off"}

    toggleMenu = () => {
        if (this.state.menuHeight === '250px') {
            this.setState({ menuHeight:'0px'})
        } else {
            this.setState({ menuHeight:'250px'})
        }
    }

    render() {
        return (
            <div id="menu" onClick={this.toggleMenu}>
                <div className="menu-trigger"><i className="fas fa-bars"></i></div>
                <div className="toggle" style={{height: `${this.state.menuHeight}`}}>
                    <a href="#who-am-i">Kim jestem?</a>
                    <a href="/">Edukacja <br id="break"/>i doświadczenie</a>
                    <a href="/">Umiejętności</a>
                    <a href="/">Projekty</a>
                    <a href="/">Kontakt</a>
                </div>
            </div>
        )
    }
}