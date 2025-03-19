import React from "react";
import { Helmet } from "react-helmet-async";
import INFO from "../data/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SEO from "../data/seo";
import "./style/project.css";

const Project = () => {
  const currSEO = SEO.find((item) => item.page === "projects");
  console.log(currSEO);

  return (
    <div className="homepage-content">
      <div className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-list">
          {INFO.projects &&
            INFO.projects.map((project, index) => (
              <div key={index} className="project-card">
                {/* <img
                  src={project.logo}
                  alt={project.title}
                  className="project-image"
                /> */}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkText}
                </a> */}
              </div>
            ))}
        </div>
      </div>

      <footer className="homepage-footer">
        <p>&copy; 2025 Aamir Hussain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Project;
