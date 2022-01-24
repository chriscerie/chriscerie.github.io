import React from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import EmploymentEntry from "./EmploymentEntry";

const useStyles = makeStyles({
  h1: {
    fontSize: "2.2rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
    marginBottom: 30,
  },
  body1: {
    fontSize: "1.2rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
  },
});

function Employment(props: { employmentRef: React.RefObject<HTMLDivElement> }) {
  const classes = useStyles();

  return (
    <div className="employment" ref={ props.employmentRef }>
      <Container style={{ padding: "4rem clamp(1rem,5%, 7rem)" }}>
        <Typography className={classes.h1} variant="h1">
          Employment
        </Typography>
        <EmploymentEntry
          position="Software Engineer Intern"
          company="Domo, Inc. / Nov 2021 - Present"
          description={[]}
        />
      </Container>
    </div>
  );
}

export default Employment;
