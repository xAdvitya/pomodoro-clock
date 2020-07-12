import React, { Component } from 'react'

export class Length extends Component {
    render() {
        return (
            < div style={lengthStyle} >
                <div className="length-control" >
                    <div id="break-label"> break-length</div>
                    <i onClick={() => this.props.increment(breakL)}>up</i> {this.props.breakL} <i onClick={() => this.props.decrement(breakL)}>down</i>
                </div>
                <div className="length-control">
                    <div id="session-label"> session-length</div>
                    <i onClick={() => this.props.increment(sessionL)}> up</i>  {this.props.sessionL}  <i onClick={() =>this.props.decrement(sessionL)}>down</i>
                </div>
            </div >
        )
    }
}

const breakL = "break-label";
const sessionL = "session-label";

const lengthStyle = {
    marginTop: "50px"
}

export default Length
