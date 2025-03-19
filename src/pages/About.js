import React from "react";
import { Helmet } from "react-helmet-async";
import INFO from "../data/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.about.title}</title>
        <meta name="description" content={INFO.about.description} />
      </Helmet>

      <div className="homepage-content">
        <div className="grid">
          <div className="homepage-text">
            <div className="homepage-title">{INFO.about.title}</div>
            <div className="homepage-subtitle">{INFO.about.description}</div>
            <div className="homepage-socials">
              <a
                href={INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
                <span style={{ marginLeft: "10px" }}> Follow on github</span>
              </a>
              <a
                href={INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                <span style={{ marginLeft: "10px" }}> Follow on linkedin</span>
              </a>
              <a
                href={`mailto:${INFO.main.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="social-icon" />{" "}
                <span style={{ marginLeft: "10px" }}>
                  aamir1995hussain@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="homepage-image">
            <img
              src="/assets/images/Image_2.png"
              alt="Profile"
              className="homepage-image-content"
            />
          </div>
        </div>

        <footer className="homepage-footer">
          <p>&copy; 2025 Aamir Hussain. All rights reserved.</p>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default About;
