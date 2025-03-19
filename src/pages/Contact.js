import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import INFO from "../data/User";
import "./style/contact.css";
import SEO from "../data/seo";

const Contact = () => {
  const currSEO = SEO.find((item) => item.page === "contact");
  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currSEO.description} />
      </Helmet>

      <div className="contact-card">
        <h2 className="contact-card-title">Let's Connect</h2>
        <p className="contact-card-subtitle">
          Feel free to reach out via email at&nbsp;
          <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I aim to
          respond within 24 hours. You can also connect with me on{" "}
          <a
            href={INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href={INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          to stay updated on my projects.
        </p>

        <div className="contact-card-socials">
          <a
            href={INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
            <span>GitHub</span>
          </a>
          <a
            href={INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${INFO.main.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            <span> aamir1995hussain@gmail.com</span>
          </a>
        </div>

        <footer className="contact-footer">
          <p>&copy; 2025 Aamir Hussain. All rights reserved.</p>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Contact;
