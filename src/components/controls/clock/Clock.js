import React, { Component } from 'react';
import "./clock.css"
import Play from './controls/Play';
import Length from './controls/Length';
import Image from "./Image"

let interval =0;
let min,sec;
const url = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
const audio = new Audio(url);
export class Clock extends Component {

    state = {
        second : 0,
        minute : 1,
        breakLength : 1,
        sessionLength : 1,
        paused : false,
        session : true,
        wasPaused : false,
    }
    
    increaseTime = (id) =>{

        if (!this.state.paused) {
        if (id === "break-label"){
        this.setState({breakLength: this.state.breakLength + 1});
    }
        else if (id === "session-label") {
            console.log("counters")
            this.setState({ sessionLength: this.state.sessionLength + 1, minute: this.state.minute + 1});
        }   
    }
        
    }

    decreaseTime = (id) => {
        if (!this.state.paused) {
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
        this.setState({ second: this.state.second - 1 });
        if (this.state.minute === 0 && this.state.second < 0) {
            console.log("/////////////////Audio/////////////////")
            this.auido();
            this.setState({ session: false});
            this.timeController();
        }
        else if(this.state.second <0){
            console.log("into if")
            this.setState({minute: this.state.minute-1 ,second:59});
        }

    }

    counterbreak = () => {
        console.log("counter brk");
        this.setState({second: this.state.second - 1 })

        if (this.state.minute === 0 && this.state.second < 0) {
            console.log("counter brk if     ");
            console.log("/////////////////Audio/////////////////")
            this.auido();
            this.setState({ session: true});
            this.timeController();
        }
        else if (this.state.second < 0) {
            console.log("into if")
            this.setState({ minute: this.state.minute - 1, second: 59 });
        }
    }

    startSess = () => {

        clearInterval(interval);
        console.log(this.state.wasPaused + "was paused");
        if (this.state.wasPaused) {
            console.log("yessssssssssssss")
            this.setState({ minute: min, second: sec });
            this.setState({ wasPaused:false });
        }
        else {
            this.setState({ minute: this.state.sessionLength, second: 0 });
        }
        interval = setInterval(this.counterSess, 1000);
    }

    pausedValue =()=>{
        console.log("hi")
        const min = this.state.minute;
        const sec = this.state.second;
        this.reset();
        this.setState({ minute: min, second: sec, paused: true });
    }

    startBreak = () => {
///////////////////////////////
        clearInterval(interval);
        if(this.state.wasPaused){
            this.setState({minute:min , second : sec});
            this.setState({ wasPaused: false });
        }
        else{
            this.setState({ minute: this.state.breakLength, second: 0 });
        }
        interval = setInterval(this.counterbreak, 1000);
    }

    reset = () => {
        console.log("stop")
        clearInterval(interval);
    }

    resetTime = () =>{
        clearInterval(interval);
        this.setState({ breakLength: 1, sessionLength: 1, second: 0, minute: 1 });
    }

    auido = ()=>{
        audio.play();
    }

    timeController = () =>{

        if(this.state.session){
            console.log("timeController ses");
            this.startSess();
        }
        else{
            console.log("timeController brk");
            this.startBreak();
        }
    }

    saveValue(){
        min = this.state.minute;
        sec = this.state.second;
        this.setState({wasPaused : true});
        clearInterval(interval);
    }

    tooglePaused = () =>{
        this.setState({paused : !this.state.paused});
    }

    playPause = () =>{
        if(this.state.paused === false){
            console.log("time ctrl");
            this.timeController();
        }
        else{
            console.log("save ctrl");
            this.saveValue();
        }
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
                    <Play play={this.playPause} tooglePaused={this.tooglePaused}reset={this.reset}/>
                <Image />
                </div>
                
            </div>
        )
    }
}

export default Clock
