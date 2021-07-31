import React from "react";
import "./EmploymentEntry.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  h2: {
    fontSize: "1.5rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "normal",
  },
  h3: {
    fontSize: "1.2rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
    marginBottom: 20,
  },
  body1: {
    fontSize: "1.2rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
    marginBottom: 15,
  },
});

type defaultProps = {
  position: string,
  company: string,
  description: Array<string>,
}

function EmploymentEntry(props: defaultProps) {
  const classes = useStyles();

  return (
    <div className="employment-entry-container">
      <Typography className={classes.h2}>
        {props.position}
      </Typography>
      <Typography className={classes.h3}>
        {props.company}
      </Typography>
      {props.description.map((descriptionEntry: string) => (
        <Typography className={classes.body1}>
          {descriptionEntry}
        </Typography>
      ))}
    </div>
  );
}

EmploymentEntry.defaultProps = {
  position: "",
  company: "",
  description: [],
}

export default EmploymentEntry;
