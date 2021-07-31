import React from "react";
import "./HorizontalBar.css";

type propTypes = {
  background: string;
  direction: string;
  children?: React.ReactNode;
};

function HorizontalBar(props: propTypes) {
  const type = props.direction === "down" ? "horizontal-bar-down" : "horizontal-bar-up";
  return (
    <div className={type} style={{ background: props.background }}>
      {props.children}
    </div>
  );
}

HorizontalBar.defaultProps = {
  background: "white",
  direction: "down",
};

export default HorizontalBar;
