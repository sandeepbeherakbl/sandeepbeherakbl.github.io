import { File, Folder } from "lucide-react";
import projectsData from "../../../../json/project.json";
import "./ProjectPage.css";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";

export const ProjectPage = ({ setSelectedProject }) => {
  return (
    <div className="project-main-div">
      {/* header */}
      <div className="project-main-head">
        <div className="project-head-content">
          <div className="project-page-head">
            <File width={50} height={50} />
            <h2>Project Portfolio</h2>
          </div>
          <p className="project-p-tag">
            <Typewriter
              options={{
                strings: [
                  "Explore a gallery of my projects, each reflecting my dedication and skill.",
                  "Delve into my body of work, where each project is a unique digital journey.",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </p>
        </div>
      </div>

      {/* project cards */}
      {/* <div className="project-cards-main">
        <div className="project-page">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-img">
                <h3>{project.title}</h3>
              </div>
              <div className="project-content">
                <div className="tech-stack">
                  <p>TechStack Used</p>
                  <p>{project.techStack.join(" | ")}</p>
                </div>
                <div>
                  <button onClick={() => setSelectedProject(project)}>
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="project-cards-main">
        <div className="project-page">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`hero ${index % 2 === 0 ? "first" : "first"}`}
            >
              <div className="hero-title">
                <p>{project.title}</p>
              </div>
              

              <div className="hero-description-bk"></div>
              <div className="hero-logo">
                <Folder color="white" />
              </div>
              <div className="hero-description"></div>
              <div className="hero-date">
                <p>{project.date}</p>
              </div>
              <div className="hero-btn">
                <a href="#" onClick={() => setSelectedProject(project)}>
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectPage.propTypes = {
  setSelectedProject: PropTypes.func.isRequired,
};
