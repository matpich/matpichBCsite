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

        this.references = {
            whoAmIRef: React.createRef(),
            whoAmIMenuRef: React.createRef(),
            eduExpRef: React.createRef(),
            eduExpMenuRef: React.createRef(),
            skillsRef: React.createRef(),
            skillsMenuRef: React.createRef(),
            projectsRef: React.createRef(),
            projectsMenuRef: React.createRef(),
            contactRef: React.createRef(),
            contactMenuRef: React.createRef()
        }
    }

    componentDidMount () {
        
        window.addEventListener("scroll", (e) => {
            this.highlightMenu(this.references.whoAmIRef, this.references.whoAmIMenuRef);
            this.highlightMenu(this.references.eduExpRef, this.references.eduExpMenuRef);
            this.highlightMenu(this.references.skillsRef, this.references.skillsMenuRef);
            this.highlightMenu(this.references.projectsRef, this.references.projectsMenuRef);
            // this.highlightMenu(this.references.contactRef, this.references.contactMenuRef);
        })
    }

    highlightMenu (sectionRef, menuBttnRef) {
        const section = sectionRef.current.getBoundingClientRect();

        const menuBttn = menuBttnRef.current;

        if (section.top <= 40 && section.bottom > 40) {
            menuBttn.setAttribute('id', 'rev');
        } else {
            menuBttn.removeAttribute('id');
        }
    }

    render() {
        return (
            <div>
                <Welcome />
                <div id="wrapper">
                    <div id="menu-wrapper">
                        <Menu whoAmIMenuRef={this.references.whoAmIMenuRef}
                            eduExpMenuRef={this.references.eduExpMenuRef}
                            skillsMenuRef={this.references.skillsMenuRef}
                            projectsMenuRef={this.references.projectsMenuRef}
                            contactMenuRef={this.references.contactMenuRef} />
                    </div>
                    <div id="content-wrapper">
                        <WhoAmI whoAmIRef={this.references.whoAmIRef} />
                        <EduExp eduExpRef={this.references.eduExpRef}/>
                        <Skills skillsRef={this.references.skillsRef}/>
                        <Projects projectsRef={this.references.projectsRef} />
                        <Footer contactRef={this.references.contactRef}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;