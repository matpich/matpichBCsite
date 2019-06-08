import React from "react";

import "./EduExp.css"
import EduExpElement from "../EduExpElement/EduExpElement";
import { codersCamp, swps, radio, threeM} from "../../about.json"

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

            <EduExpElement
                title={radio.title}
                date={radio.date}
                topic={radio.topic}
                desc={radio.desc}
                link={radio.link}
                source={radio.source} />

            <h1 className="section-title">Doświadczenie</h1>

            <EduExpElement
                title={threeM.title}
                date={threeM.date}
                topic={threeM.topic}
                desc={threeM.desc}
                link={threeM.link}
                source={threeM.source} />
            
            <EduExpElement
                title={swps.title}
                date={swps.date}
                topic={swps.topic}
                desc={swps.desc}
                link={swps.link}
                source={swps.source} />
            
            <EduExpElement
                title={swps.title}
                date={swps.date}
                topic={swps.topic}
                desc={swps.desc}
                link={swps.link}
                source={swps.source} />
            
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