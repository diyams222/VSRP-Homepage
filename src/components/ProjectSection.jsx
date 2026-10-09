import React from "react";
import "./ProjectSection.css";
import projectimage1 from "../assets/project1.png";
import projectimage2 from "../assets/project2.png";
import arrowIcon from "../assets/Vector.svg";

const projects = [
    {
        id: 1,
        title: "Custom Extrusion solution",
        description: "A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.",
        Image: projectimage1,
        tags: ["MINING", "EPDM", "EXTRUSION", "CONVEYOR SYSTEM"],
        showLink: true,
    },
    {

        id: 2,
        title: "Custom Extrusion solution",
        description: "A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.",
        Image: projectimage2,
        tags: ["MINING", "EPDM", "EXTRUSION", "CONVEYOR SYSTEM"],
        showLink: false,
    }
]

export default function ProjectSection() {

    return (
        <section className="project-section" id="projects">

            <div className="project-container">

                <div className="project-heading">
                    <h2 className="project-main-title">
                        Wherever Precision Is <br />
                        Needed, <span className="title-orange">VSRP Delivers.</span>
                    </h2>

                    <button className="view-all-project-btn"><span>VIEW ALL PROJECTS</span><div className="btn-arrow-circle"><img src={arrowIcon} alt="arrow" /></div></button>

                </div>


                <div className="project-cards">
                    {projects.map((item) => (
                        <div key={item.id} className="project-card">

                            <div className="project-image-box">
                                <img src={item.Image} alt={item.title} />

                                {item.showLink && (
                                    <a href="#project-detail" className="view-project-link">
                                        <span className="view-project-text-wrapper">
                                            <span className="view-project-text text-1">VIEW PROJECT</span>
                                            <span className="view-project-text text-2">VIEW PROJECT</span>
                                        </span>
                                        <span className="view-project-arrow-wrap">
                                            <img src={arrowIcon} alt="arrow" className="view-project-arrow arrow-1" />
                                            <img src={arrowIcon} alt="arrow" className="view-project-arrow arrow-2" />
                                        </span>
                                    </a>
                                )}

                                <div className="project-tags">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="project-tag-pill">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-info">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

