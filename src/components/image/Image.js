import React from 'react'
import img1 from "./work.png";
import img2 from "./break.png";
// import { default as Fade } from "react-fade";
import "./image.css";

function Image(props) {
    const session = props.session;
    return (
      <div id="image-text">
      <div className="w3-container w3-center w3-animate-opacity">
        {session ? (
          <img id="tree" src={img1} alt="img" />
        ) : (
          <img id="tree" src={img2} alt="img" />
        )}
        </div>
        <span id="timer-label">
          {session ? ("Session") : ("break")}
        </span>
      </div>
    );
}


export default Image