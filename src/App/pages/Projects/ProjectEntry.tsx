import React from "react";
import "./ProjectEntry.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  h2: {
    fontSize: "1.5rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "normal",
    marginBottom: 15,
  },
  body1: {
    fontSize: "1.2rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
    marginBottom: 15,
  },
});

type defaultProps = {
    projectName: string,
  description: Array<string>,
}

function ProjectEntry(props: defaultProps) {
  const classes = useStyles();

  return (
    <div className="project-entry-container">
      <Typography className={classes.h2}>
        {props.projectName}
      </Typography>
      {props.description.map((descriptionEntry: string) => (
        <Typography className={classes.body1}>
          {descriptionEntry}
        </Typography>
      ))}
    </div>
  );
}

ProjectEntry.defaultProps = {
    projectName: "",
  description: [],
}

export default ProjectEntry;
