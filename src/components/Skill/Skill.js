import React from "react";

import "./Skill.css"

class Skill extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            level: null
        }
    }

    componentDidMount() {
        this.setLevel();
    }

    setLevel() {
        const scale = [];
        let counter = 1;
        for(let i=1; i<=5; i++) {
            if(counter <= this.props.lvl){
                scale.push(<i className="fas fa-circle selected"></i>);
            } else {
                scale.push(<i className="fas fa-circle"></i>)
            }
            counter++;
        }
        this.setState({level:scale})
    }

    render () {
        return (
        <div className="single-skill">
            <div className="skill-name">
                {this.props.skillName}
            </div>
            <div className="skill-level">
                {this.state.level}
            </div>
        </div>
        )
    }
}

export default Skill;