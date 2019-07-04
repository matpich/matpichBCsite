import React from "react";
import ModalImage from "react-modal-image";

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
        <ModalImage 
          className="project-image"
          large={this.props.src}
          small={this.props.src}
          hideDownload={true}
          hideZoom={true}
          alt={this.props.alt} />
          {this.state.description}
      </div>
    );
  }
}