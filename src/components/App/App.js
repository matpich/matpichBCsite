import React from "react";

import Welcome from "../Welcome/Welcome";
import WhoAmI from "../WhoAmI/WhoAmI";
import Menu from "../Menu/Menu";
import EduExp from "../EduExp/EduExp"

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Menu />
                <WhoAmI />
                <EduExp />
            </div>
        )
    }
}

export default App;