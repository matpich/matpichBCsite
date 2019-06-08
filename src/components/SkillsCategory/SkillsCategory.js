import React from "react";

import Skill from "../Skill/Skill.js"

import "./SkillsCategory.css"


export default class SkillsCategory extends React.Component {
    state = {skills: []}

    componentDidMount () {
        const skillsList = this.props.skiList.map((el,index) => {
            return <Skill key={index} skillName={el[0]} lvl={el[1]} />
        });
        this.setState({skills:skillsList});
    }

    render () { 
        return (
            <div className="category-skills">
                <h1 className="category-title">{this.props.catName}</h1>
                {this.state.skills}
            </div>
        )
    }
}