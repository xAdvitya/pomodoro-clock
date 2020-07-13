import React, { Component } from "react";
import "./App.css";
import Clock from "./components/clock/Clock"
export class App extends Component {
  render() {
    return <div>
      <div>
      <Clock/>
      </div>
    </div>;
  }
}

export default App;
