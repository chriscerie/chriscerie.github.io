import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./SocialIcons.css";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function SocialIcons() {
  return (
    <Router>
      <Breadcrumbs aria-label="breadcrumb" separator="">
        <Link
          to={{
            pathname: "https://github.com/krysiene",
          }}
          target="_blank"
        >
          <img
            className="social-media-button"
            src="/images/github-icon.ico"
            alt="Github"
          />
        </Link>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/christopherchangx1/",
          }}
          target="_blank"
        >
          <img
            className="social-media-button"
            src="/images/linkedin-icon.ico"
            alt="Linkedin"
          />
        </Link>
        <Link
          to={{
            pathname: "mailto: me@chrisc.dev",
          }}
          target="_blank"
        >
          <img
            className="social-media-button"
            src="/images/email-icon.ico"
            alt="Email"
          />
        </Link>
      </Breadcrumbs>
    </Router>
  );
}

export default SocialIcons;
