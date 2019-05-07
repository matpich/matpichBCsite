import React from "react";

import Welcome from "../Welcome/Welcome";
import WhoAmI from "../WhoAmI/WhoAmI"

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <WhoAmI />
            </div>
        )
    }
}

export default App;