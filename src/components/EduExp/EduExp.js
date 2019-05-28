import React from "react";

import "./EduExp.css"
import EduExpElement from "../EduExpElement/EduExpElement";
import {codersCamp, swps} from "../../about.json"

export default () => {
    return (
        <section className="edu-exp">
            <h1 className="section-title">Edukacja</h1>
            <EduExpElement 
                title={codersCamp.title}
                date={codersCamp.date}
                topic={codersCamp.topic}
                desc={codersCamp.desc}
                link={codersCamp.link}
                source={codersCamp.source} />

            <EduExpElement
                title={swps.title}
                date={swps.date}
                topic={swps.topic}
                desc={swps.desc}
                link={swps.link}
                source={swps.source} />
        </section>
    )
}