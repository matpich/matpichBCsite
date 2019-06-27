import React from "react";

import SkillsCategory from "../SkillsCategory/SkillsCategory.js"

import "./Skills.css"

import { dev, lang } from "../../skills.json";

export default () => {
    return (
        <section className="skills">
            <div className="sills-container">
                <h1 className="section-title">Umiejętności</h1>
                <SkillsCategory catName="Programistyczne" skiList={dev} />
                <SkillsCategory catName="Języki obce" skiList={lang} />
            </div>
        </section>
    )
}