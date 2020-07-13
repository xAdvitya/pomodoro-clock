import React, { Component } from 'react'
import "./controls.css"
export class Length extends Component {
    render() {
        return (
          <div id="length-box">
            <div className="label length-control">
              <div id="break-label">Break length</div>
              <i
                id="break-increment"
                className="fa fa-arrow-up"
                onClick={() => this.props.increment(breakL)}
              ></i>{" "}
              <span id="break-length">{this.props.breakL} </span>
              <i
                id="break-decrement"
                className="fa fa-arrow-down"
                onClick={() => this.props.decrement(breakL)}
              ></i>
            </div>
            <div className="label length-control">
              <div id="session-label">Session length</div>
              <i
                id="session-increment"
                className="fa fa-arrow-up"
                onClick={() => this.props.increment(sessionL)}
              ></i>
              {"   "}
              <span id="session-length">{this.props.sessionL}{" "}</span>
              <i
                id="session-decrement"
                className="fa fa-arrow-down"
                onClick={() => this.props.decrement(sessionL)}
              ></i>
            </div>
          </div>
        );
    }
}

const breakL = "break-label";
const sessionL = "session-label";


export default Length
