import React, { Component } from 'react'
import "./controls.css"


let button = <i className="fa fa-play" ></i>;
let playButton = <i className="fa fa-play"></i>;

export class Play extends Component {
         state = {
           palying: false,
         };
         buttonCtrl = () => {
           if (!this.state.palying) {
             button = <i className="fa fa-pause"></i>;
             this.setState({ palying: !this.state.palying });
           } else {
             button = <i className="fa fa-play"></i>;
             this.setState({ palying: !this.state.palying });
           }
         };
         render() {
           return (
             <div id="play">
               <div
                 id="start_stop"
                 onClick={() => {
                   this.props.play();
                   this.props.tooglePaused();
                   this.buttonCtrl();
                 }}
               >
                 {button}
               </div>
               <div
                 id="reset"
                 onClick={() => {
                   this.props.reset();
                   this.setState({ playing: false });
                   button = playButton;
                 }}
               >
                 <i className="fa fa-refresh" aria-hidden="true"></i>
               </div>
             </div>
           );
         }
       }

export default Play






