import React from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

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

function Employment() {
  const classes = useStyles();

  return (
    <div className="employment">
      <Container style={{ padding: "50px 100px" }}>
        <Typography className={classes.h1} variant="h1">
          Employment
        </Typography>
      </Container>
    </div>
  );
}

export default Employment;
