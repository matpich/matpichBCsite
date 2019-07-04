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
            <div className="menu" onClick={this.toggleMenu}>
                <div className="menu-trigger"><i className="fas fa-bars"></i></div>
                <div className="toggle" style={{height: `${this.state.menuHeight}`}}>
                    <a href="#who-am-i" ref={this.props.whoAmIMenuRef}>Kim jestem?</a>
                    <a href="#experience" ref={this.props.eduExpMenuRef}>Edukacja <br id="break"/>i doświadczenie</a>
                    <a href="#skills" ref={this.props.skillsMenuRef}>Umiejętności</a>
                    <a href="#projects" ref={this.props.projectsMenuRef}>Projekty</a>
                    {/* <a href="#contact" ref={this.props.contactMenuRef}>Kontakt</a> */}
                </div>
            </div>
        )
    }
}