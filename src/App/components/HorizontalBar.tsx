import React from "react";
import './HorizontalBar.css';

const defaultProps = {
  background: "white",
  direction: "down",
};

function HorizontalBar(props: typeof defaultProps) {
  const type = props.direction === "down" ? "horizontal-bar-down" : "horizontal-bar-up";
  return <div className={type} style={{background: props.background}}></div>;
}

HorizontalBar.defaultProps = defaultProps;

export default HorizontalBar;
