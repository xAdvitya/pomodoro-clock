import React, { Component } from 'react'

export class Play extends Component {
    render() {
        return (
            < div id="play" style={lengthStyle} >
                <div id="paly-pause" onClick={this.props.play}>play</div>
                <div id="reset" onClick={this.props.reset}>rest</div>
            </div >
        )
    }
}


const lengthStyle = {
    width: "200px",
    marginLeft:"10px",
}

export default Play






