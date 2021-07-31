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
          company="Tech For Good Inc. / June 2021 - Aug 2021"
          description={[
            "Implemented reusable React components and a variety of scalable web pages with TypeScript, resulting in a more robust user experience.",
            "Implemented unit testing strategy and unit tests with Jest and integrated application testing suite into the team’s CI pipeline.",
            "Spearheaded migration to a trunk-based Git branching strategy, resulting in productivity gains of 50% and enabling continuous code integration and review.",
          ]}
        />
      </Container>
    </div>
  );
}

export default Employment;
