import React, { Component } from 'react'
import "./controls.css"
export class Length extends Component {
    render() {
        return (
            < div id="length-box">
                <div className="label length-control" >
                    <div id="break-label">Break length</div>
                    <i className="fa fa-arrow-up" onClick={() => this.props.increment(breakL)}></i> {this.props.breakL} {" "}
                    <i className="fa fa-arrow-down" onClick={() => this.props.decrement(breakL)}></i>
                </div>
                <div className="label length-control">
                    <div id="session-label">Session length</div>
        <i className="fa fa-arrow-up" onClick={() => this.props.increment(sessionL)}></i>{"   "}{this.props.sessionL} {" "}
                    <i className="fa fa-arrow-down" onClick={() =>this.props.decrement(sessionL)}></i>
                </div>
            </div >
        )
    }
}

const breakL = "break-label";
const sessionL = "session-label";


export default Length
