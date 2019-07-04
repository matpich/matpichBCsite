import React from "react";

import "./Footer.css"

export default class Footer extends React.Component {
    render () {
        return (
            <footer id="contact" ref={this.props.contactRef}>
                <h1 className="contact">Kontakt</h1>
                <div className="contacts-options">
                    <a className="contact-form" href="https://github.com/matpich" target="_blank">
                        <i className="fab fa-github-square foot-icon"></i>
                        github.com/matpich
                    </a>
                    <a className="contact-form" href="https://linkedin.com/in/matpich" target="_blank">
                        <i className="fab fa-linkedin foot-icon"> </i>
                        linkedin.com/in/matpich
                    </a>
                    <a className="contact-form" href="mailto:mat.pich@interia.pl?subject=Kontakt ze strony matpich.pl&body=Cześć," target="_self">
                        <i className="fas fa-envelope-square foot-icon"> </i>
                        mat.pich@interia.pl
                    </a>
                </div>
            </footer>
        )
    }
}