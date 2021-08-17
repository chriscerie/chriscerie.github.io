import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./SocialIcons.css";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function SocialIcons() {
  return (
    <Router>
      <Breadcrumbs aria-label="breadcrumb" separator="" style={{marginBottom: "1.5rem"}}>
        <Link
          to={{
            pathname: "https://github.com/chriscerie",
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
            pathname: "https://www.linkedin.com/in/chriscdev/",
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
