import React from "react";

import "./Footer.css"

export default class Footer extends React.Component {
    render () {
        return (
            <footer id="contact" ref={this.props.contactRef}>
                <h1 className="contact">Kontakt</h1>
                <div className="contacts-options">
                    <div className="contact-form">
                        <i className="fab fa-github-square foot-icon"></i>
                        github.com/matpich
                    </div>
                    <div className="contact-form">
                        <i className="fab fa-linkedin foot-icon"> </i>
                        linkedin.com/in/matpich
                    </div>
                    <div className="contact-form">
                        <i className="fas fa-envelope-square foot-icon"> </i>
                        mat.pich@interia.pl
                    </div>
                </div>
            </footer>
        )
    }
}