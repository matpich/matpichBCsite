import React from "react"

import "./EduExpElement.css";

export default (props) => {
    return (
        <div className="element">
            <div className="title">{props.title}</div>
            <div className="date">{props.date}</div>

            <div className="topic">{props.topic}</div>
            <p className="desc">{props.desc}</p>

            <div className="source">
                <i className="fas fa-link"></i>
                <a className="link" href={props.link} target="_blank">{props.source}</a>
            </div>
        </div>
    )
}