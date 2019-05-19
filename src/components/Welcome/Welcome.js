import React from "react";

import "./Welcome.css"


class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome-section-container">
                <div className="name-claim">
                    <h1 className="name">Mateusz Pichniarczyk</h1>
                    <div className="claim">frontend developer & graphic designer</div>
                    <div className="go-down">
                        <i className="fas fa-angle-down" id="angle-down"></i>
                    </div>
                </div>

            </div>
        )
    }
}

export default Welcome;