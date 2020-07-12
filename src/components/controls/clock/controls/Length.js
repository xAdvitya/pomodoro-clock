import React from 'react'

function Length() {
    return (
        <div style={lengthStyle}>
            <div className="length-control" >
                <div id="break-label"> break-length</div>
                <i>up</i> {5} <i>down</i>
            </div>
            <div className="length-control">
                <div id="session-label"> session-length</div>
                <i>up</i>  {25} <i>down</i>
                </div>
        </div>
    )
}

const lengthStyle = {
   marginTop : "50px"
}
export default Length
