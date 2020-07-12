import React, { Component } from 'react';
import "./clock.css"
import Play from './controls/Play';
import Length from './controls/Length';
import Image from "./Image"
export class Clock extends Component {
    render() {
        return (
            <div >
                <div id="image-box">
                <div id="container">
                <div className="circle out">
                    <div className="circle in-1">
                        <div className="circle in-2">
                            <div id="timer">
                                2 : 30
                            </div>
                        </div>
                    </div>
                    </div>
                    <Length />
                </div>
                <Play />
                <Image />
                </div>
                
            </div>
        )
    }
}

const lengthStyle = {
 
}
export default Clock
