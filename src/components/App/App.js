import React from "react";

import Welcome from "../Welcome/Welcome";
import WhoAmI from "../WhoAmI/WhoAmI";
import Menu from "../Menu/Menu";
import EduExp from "../EduExp/EduExp"
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Menu />
                <WhoAmI />
                <EduExp />
                <Skills />
                <Projects />
            </div>
        )
    }
}

export default App;