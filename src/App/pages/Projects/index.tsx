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
          projectName="3D Open World Multiplayer Game"
          description={[
            "Integrated declarative UI library Roact (based on React) and state management library Rodux (based on Redux) to provide a robust UI/UX experience.",
            "Implemented unit testing strategy and automated behavioral-driven-development style unit tests with TestEZ.",
          ]}
        />
        <ProjectEntry
          projectName="Asset-Search Plugin"
          description={[
            "Designed open-sourced plugin to parse game contents in search for specific asset IDs on the Roblox platform, enabling memory optimizations for inefficient assets.",
            "Achieved over 1000 sales, contributing to significant productivity gains and memory optimization.",
          ]}
        />
        <ProjectEntry
          projectName="Convolutional Neural Network"
          description={[
            "Trained 400k images from Google’s Quick Draw image database using Python to predict whether a 28x28 sketch is an airplane, car, or clock.",
            "Configured model to 5 epochs with batch sizes of 50, resulting in a validation accuracy of 98.7%.",
          ]}
        />
      </Container>
    </div>
  );
}

export default Projects;
