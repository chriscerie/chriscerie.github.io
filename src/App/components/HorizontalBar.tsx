import React from "react";
import './HorizontalBar.css';

const defaultProps = {
  style: {
    background: "white",
  }
};

function HorizontalBar(props: typeof defaultProps) {
  return <div className="horizontal-bar" style={props.style}></div>;
}

HorizontalBar.defaultProps = defaultProps;

export default HorizontalBar;
