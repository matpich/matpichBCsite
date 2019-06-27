import React from "react";

import Project from "../Project/Project.js";

import "./ProjectsCategory.css";

export default class ProjectsCategory extends React.Component {
    state = {projects: []};

    componentDidMount() {
        //iterates through all projects in category and produce an array of projects and assign it to "projects" state to re-render view
        const singleCategoryProjects = [];
        for(let project of this.props.projects) {

            //checks if there is description in project, if so, then <Project /> component is returned with "description" prop
            const absenceDescription = [];
            for(let desc in project) {
                absenceDescription.push(desc);
            }
            const isDescription = absenceDescription.every((el) => el !== "description"); //"description" absence checking

            //if object has description it is returned with it, if not it is returned without it
            if(!isDescription) {
                singleCategoryProjects.push(
                    <Project
                        key={project.alt}
                        src={project.src}
                        alt={project.alt}
                        description={project.description} />
                )
            } else {
                singleCategoryProjects.push(
                    <Project
                        key={project.alt}
                        src={project.src}
                        alt={project.alt} />
                )
            }
        }

        this.setState({projects:singleCategoryProjects})
    }

    render () {
        return (
            <div className="projects-category">
                <h1 className="category-title">{this.props.catName}</h1>
                <div className="projects-sub">
                    {this.state.projects}
                </div>

            </div>
        )
    }
}