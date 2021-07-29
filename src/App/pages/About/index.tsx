import React from 'react';
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  h1: {
    fontSize: "3rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
    marginBottom: 20,
  },
  body1: {
    fontSize: "1.5rem",
    fontFamily: "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
  },
});

function About() {
  const classes = useStyles();

  return (
    <div className="about">
      <Container style={{padding: "50px 100px"}}>
        <Typography className={classes.h1} variant="h1">
          About me
        </Typography>
        <Typography className={classes.body1} variant="body1">
          I am a computer science major at University of California, Santa Barbara. Dedicated to a lifetime of learning, I am always open to tackle new and exciting problems!
        </Typography>
      </Container>
    </div>
  )
}

export default About