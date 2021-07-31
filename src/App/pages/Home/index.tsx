import React from "react";
import "./index.css";
import Container from "@material-ui/core/Container";

function Home(props: { homeRef: React.RefObject<HTMLDivElement> }) {
  return (
    <Container style={{ padding: "4rem clamp(1rem,5%, 7rem)" }} ref={props.homeRef}>
      <div className="middle-horizontal-container">
        <h1>Hi, I'm Chris.</h1>
        <h2>A software engineer.</h2>
      </div>
    </Container>
  );
}

export default Home;
