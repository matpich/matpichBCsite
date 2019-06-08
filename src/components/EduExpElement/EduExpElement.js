import React from "react"

import "./EduExpElement.css";

export default (props) => {
    return (
        <div className="element">
            <div className="title">{props.title}</div>
            <div className="date">{props.date}</div>

            <div className="topic">{props.topic}</div>
            <p className="desc">{props.desc}</p>

            <a className="source" href={props.link} target="_blank">
                <i className="fas fa-link"></i>
                <p className="link">{props.source}</p>
            </a>
        </div>
    )
}