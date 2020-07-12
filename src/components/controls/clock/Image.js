import React from 'react'
import img from "./tree.svg";

function Image() {
    return (
        <div style={lengthStyle}>
            <img  id="tree" src={img} alt="img" />
        </div>
    )
}

const lengthStyle = {
    width : "700px",    
    float:"right"
}

export default Image