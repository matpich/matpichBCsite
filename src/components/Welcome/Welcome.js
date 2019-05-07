import React from "react";

import "./Welcome.css"


class Welcome extends React.Component {
    render() {
        return (
            <div class="welcome-section-container">
                <div class="name-claim">
                    <h1>Mateusz <br /> Pichniarczyk</h1>
                    <div class="claim">frontend developer & graphic designer</div>
                </div>
            </div>
        )
    }
}

export default Welcome;