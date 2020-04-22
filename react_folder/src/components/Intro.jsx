import React, { Component } from "react";
import papers from "../images/papers.png";

class Intro extends Component {
  render() {
    return (
      <div>
        <div style={header1}>Keep track of your applications</div>
        <div>{/* <img style={image1} src={papers}></img> */}</div>
      </div>
    );
  }
}

const header1 = {
  marginTop: "40px",
  fontFamily: "Roboto, sans-serif",
  textAlign: "center",
};

const image1 = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
export default Intro;
