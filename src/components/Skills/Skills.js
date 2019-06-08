import React from "react";

import Skill from "../Skill/Skill.js"

import "./Skills.css"

export default () => {
    return (
        <section className="skills">
            <h1 className="section-title">Umiejętności</h1>
            <Skill skillName="Python" lvl={2}/>
            <Skill skillName="Ruby" lvl={5} />
            <Skill skillName="C++" lvl={4} />
        </section>
    )
}