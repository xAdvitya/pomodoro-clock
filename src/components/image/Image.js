import React from 'react'
import img from "./tree.svg";
import img1 from "./work.png";
import img2 from "./break.png";
// import { default as Fade } from "react-fade";
import "./image.css";

function Image(props) {
    const session = props.session;
    return (
        <div>
            {session ? <img id="tree" src={img1} alt="img" />: <img id="tree" src={img2} alt="img" />}
        </div>
    )
}


export default Image