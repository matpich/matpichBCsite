import React from "react";

import Welcome from "../Welcome/Welcome";
import WhoAmI from "../WhoAmI/WhoAmI";
import Menu from "../Menu/Menu";
import EduExp from "../EduExp/EduExp"
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.whoAmIRef = React.createRef();
        this.WhoAmIMenuRef = React.createRef();
    }

    componentDidMount () {
        
        window.addEventListener("scroll", (e) => {
            const whoAmI = this.whoAmIRef.current.getBoundingClientRect();

            const whoAmIMenuButton = this.WhoAmIMenuRef.current;

            if(whoAmI.top <= 0 && whoAmI.bottom > 0) {
                whoAmIMenuButton.setAttribute('id', 'rev');
            } else {
                whoAmIMenuButton.removeAttribute('id');
            }
            
            console.log(whoAmI)
        })
    }

    render() {
        return (
            <div>
                <Welcome />
                <div id="a">
                    <div id="b">
                        <Menu WhoAmIMenuRef={this.WhoAmIMenuRef} />
                    </div>
                    <div id="c">
                        <WhoAmI whoAmIRef={this.whoAmIRef} />
                        <EduExp />
                        <Skills />
                        <Projects />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;