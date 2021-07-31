import React from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  h1: {
    fontSize: "2.2rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
    marginBottom: 20,
  },
  body1: {
    fontSize: "1.2rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
  },
});

function About(props: { aboutRef: React.RefObject<HTMLDivElement> }) {
  const classes = useStyles();

  return (
    <div className="about" ref={ props.aboutRef }>
      <Container style={{ padding: "4rem clamp(1rem,5%, 7rem)" }}>
        <Typography className={classes.h1} variant="h1">
          About me
        </Typography>
        <Typography className={classes.body1} variant="body1">
          I am a computer science major at University of California, Santa
          Barbara. Dedicated to a lifetime of learning, I am always open to
          tackle new and exciting problems!
        </Typography>
        <Typography className={classes.body1} variant="body1">
          <br/>Languages<br/>C++, TypeScript/JavaScript, Lua, Java
        </Typography>
        <Typography className={classes.body1} variant="body1">
          <br/>Frameworks and Tools<br/>React, Git, Bash/Shell
        </Typography>
        <Typography className={classes.body1} variant="body1">
          <br/>Operating Systems<br/>Linux (Ubuntu), Windows
        </Typography>
      </Container>
    </div>
  );
}

export default About;
