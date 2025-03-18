import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          <li>
            <Link
              to="/"
              className={`navbar-link ${activeLink === "/" ? "active" : ""}`}
              onClick={() => setActiveLink("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`navbar-link ${
                activeLink === "/about" ? "active" : ""
              }`}
              onClick={() => setActiveLink("/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`navbar-link ${
                activeLink === "/projects" ? "active" : ""
              }`}
              onClick={() => setActiveLink("/projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`navbar-link ${
                activeLink === "/contact" ? "active" : ""
              }`}
              onClick={() => setActiveLink("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
