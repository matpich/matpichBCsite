import React from "react";

import ProjectsCategory from "../ProjectsCategory/ProjectsCategory.js";

import projects from "../../projects.json";

import "./Projects.css";

export default class Projects extends React.Component {
    state = {categories: []};

    componentDidMount() {
        const allCategories = [];
        for(let category in projects) {
            allCategories.push(<ProjectsCategory projects={projects[category]} key={category} catName={category} />)
        }

        this.setState({categories:allCategories});
    }

    render () {
        return (
            <section className="projects">
                <h1 className="section-title">Projekty</h1>
                {this.state.categories}
            </section>
        )
    }
}