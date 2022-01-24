import React from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProjectEntry from "./ProjectEntry";

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

function Projects(props: { projectsRef: React.RefObject<HTMLDivElement> }) {
  const classes = useStyles();

  return (
    <div className="projects" ref={ props.projectsRef }>
      <Container style={{ padding: "4rem clamp(1rem,5%, 7rem)" }}>
        <Typography className={classes.h1} variant="h1">
          Projects
        </Typography>
        <ProjectEntry
          projectName="Crowdsourced Indoor Map Platform"
          description={[
            "Developed NodeJS indoor mapping platform leveraging MapboxGL to crowdsource directions to points of interests, featuring comments, image upload, Google OAuth, moderator panels, and data submission.",
            "Designed mobile-first responsive components and web pages using React and Redux and created secure REST APIs using ExpressJS and MongoDB (TypeScript).",
            "Implemented agile unit/snapshot tests with Jest and GitHub Actions CI/CD workflow for the entire application, resulting in 50% line coverage.",
            "Served as main point of contact for code reviews and rigorously reviewed pull requests from a Scrum team of 6, ensuring consistent code quality.",
          ]}
        />
      </Container>
    </div>
  );
}

export default Projects;
