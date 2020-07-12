import React from 'react'

function Play() {
    return (
        <div id="play" style={lengthStyle}>
            <div id="paly-pause">play</div>
            <div id="reset">rest</div>
        </div>
    )
}

const lengthStyle = {
    width: "200px",
    marginTop:"-6   00px",
}

export default Play
