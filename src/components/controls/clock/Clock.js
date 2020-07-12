import React, { Component } from 'react';
import "./clock.css"
import Play from './controls/Play';
import Length from './controls/Length';
import Image from "./Image"

export class Clock extends Component {

    state = {
        second : 0,
        minute :25,
        startStop : true,
        breakLength : 5,
        sessionLength : 25,
    }

    increaseTime = (id) =>{
        console.log(id)
        if (id === "break-label"){
        this.setState({breakLength: this.state.breakLength + 5});
    }
        else if (id === "session-label") {
            console.log("counters")
            this.setState({ sessionLength: this.state.sessionLength + 5 });
        }
    }

    decreaseTime = (id) => {
        console.log(id)
        if (id === "break-label") {
            this.setState({ breakLength: this.state.breakLength - 5 });
        }
        else if (id === "session-label") {
            this.setState({ sessionLength: this.state.sessionLength - 5 });
        }
    }

    reset = () =>{
        this.setState({ breakLength: 5, sessionLength: 25,second : 0, minute:25 });
    }
    counter = () =>{
        console.log("counter")
        this.setState({second: this.state.second+1})
    }

    start = () => {
        console.log("start")
       setInterval(this.counter, 1000);
    }
    render() {
        return (
            <div >
                <div id="image-box">
                <div id="container">
                <div className="circle out">
                    <div className="circle in-1">
                        <div className="circle in-2">
                            <div id="timer">
                            {this.state.sessionLength} : {this.state.second}
                            </div>
                        </div>
                    </div>
                    </div>
                        <Length decrement={this.decreaseTime} increment={this.increaseTime} breakL={this.state.breakLength} sessionL={this.state.sessionLength}/>
                </div>
                    <Play play={this.start} reset={this.reset}/>
                <Image />
                </div>
                
            </div>
        )
    }
}

const lengthStyle = {
 
}
export default Clock
