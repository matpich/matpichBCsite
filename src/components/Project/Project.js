import React from "react";

import "./Project.css";
 
export default class Project extends React.Component {
  state = {description:null}

  componentDidMount() {
    if(!this.props.description) {
      return;
    } else {
      this.setState({ description: <p className="project-description">{this.props.description}</p>})
    }
  }

  render() {
    return (
      <div className="project-container">
        <img
          className="project-image"
          src={this.props.src}
          alt={this.props.alt} />
          {this.state.description}
      </div>
    );
  }
}