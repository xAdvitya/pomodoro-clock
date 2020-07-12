import React, { Component } from 'react';
import "./clock.css"
import Play from './controls/Play';
import Length from './controls/Length';
import Image from "./Image"

let interval = 0;
let start,remaining;
let timer = true;
export class Clock extends Component {

    state = {
        second : 0,
        minute : 1,
        startStop : true,
        breakLength : 1,
        sessionLength : 1,
    }
    
    increaseTime = (id) =>{
        console.log(id)
        if (this.state.startStop) {
        if (id === "break-label"){
        this.setState({breakLength: this.state.breakLength + 1});
    }
        else if (id === "session-label") {
            console.log("counters")
            this.setState({ sessionLength: this.state.sessionLength + 5, minute: this.state.minute + 5});
        }   
    }
    }

    decreaseTime = (id) => {
        console.log(id)
        if (this.state.startStop) {
        if (id === "break-label") {
            this.setState({ breakLength: this.state.breakLength - 5 });
        }
        else if (id === "session-label") {
            this.setState({ sessionLength: this.state.sessionLength - 5 });
        }
    }
    }

    counterSess = () =>{
        console.log("counter")
        this.setState({second: this.state.second - 1 });
        if (this.state.minute === 0 && this.state.second < 0) {
            this.auido();
            this.startBreak();
        }
        else if(this.state.second <0){
            console.log("into if")
            this.setState({minute: this.state.minute-1 ,second:59});
        }

    }

    counterbreak = () => {
        console.log("counter")
        this.setState({second: this.state.second - 1 })

        if (this.state.minute === 0 && this.state.second < 0) {
            this.auido();
            this.startSess();
        }
        else if (this.state.second < 0) {
            console.log("into if")
            this.setState({ minute: this.state.minute - 1, second: 59 });
        }
    }

    startSess = () => {
        if (this.state.startStop){
            clearInterval(interval);
            this.setState({ minute: this.state.sessionLength, second: 0});
            console.log("start session");
           interval = setInterval(this.counterSess,1000);
        }
    }

    startBreak = () =>{
        console.log("start break");
        clearInterval(interval);
        this.setState({ minute : this.state.breakLength , second:0});
        interval = setInterval(this.counterbreak, 1000);

    }

    reset = () => {
        console.log("stop")
        clearInterval(interval);
        this.setState({ startStop: true });
        this.resetTime();
    }

    resetTime = () =>{
        this.setState({ breakLength: 1, sessionLength: 1, second: 0, minute: 1 });
    }

    auido = ()=>{
        const url = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
        Audio(url).play();
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
                            {this.state.minute} : {this.state.second}
                            </div>
                        </div>
                    </div>
                    </div>
                        <Length decrement={this.decreaseTime} increment={this.increaseTime} breakL={this.state.breakLength} sessionL={this.state.sessionLength}/>
                </div>
                    <Play play={this.startSess} reset={this.reset}/>
                <Image />
                </div>
                
            </div>
        )
    }
}

const lengthStyle = {
 
}
export default Clock
