import React from "react";

import Welcome from "../Welcome/Welcome";
import WhoAmI from "../WhoAmI/WhoAmI"
import Menu from "../Menu/Menu"

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Menu />
                <WhoAmI />
            </div>
        )
    }
}

export default App;