import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./index.css";
import SocialIcons from "./SocialIcons";
import BottomLinks from "./BottomLinks";

const useStyles = makeStyles({
  h1: {
    fontSize: "1.6rem",
    fontFamily:
      "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  body1: {
    fontSize: "0.8rem",
    fontFamily:
      "Segoe UI, Ubuntu, Roboto, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "lighter",
    color: "#E6E6E6",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className="footer">
      <Container style={{ padding: "2rem clamp(1rem, 5%, 7rem) 1.5rem" }}>
        <img
          className="computer-icon"
          src="/images/computer.ico"
          alt="Computer"
        />
        <Typography className={classes.h1}>Christopher Chang</Typography>
        <SocialIcons />
        <BottomLinks />
        <Typography className={classes.body1} align="center">
          © 2021 Christopher Chang
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
