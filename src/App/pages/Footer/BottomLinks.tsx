import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./BottomLinks.css";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function BottomLinks() {
  return (
    <Router>
      <Breadcrumbs aria-label="breadcrumb" separator="">
        <Link
          to={{
            pathname: "https://github.com/chriscerie/chriscerie.github.io",
          }}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="bottomLink">Site Repository</div>
        </Link>
      </Breadcrumbs>
    </Router>
  );
}

export default BottomLinks;
