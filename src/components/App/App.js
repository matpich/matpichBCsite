import React from "react";

import Welcome from "../Welcome/Welcome";
import WhoAmI from "../WhoAmI/WhoAmI";
import Menu from "../Menu/Menu";
import EduExp from "../EduExp/EduExp"
import Skills from "../Skills/Skills";

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Menu />
                <WhoAmI />
                <EduExp />
                <Skills />
            </div>
        )
    }
}

export default App;