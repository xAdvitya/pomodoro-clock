import React, { Component } from "react";
import "./App.css";
import Clock from "./components/controls/clock/Clock";

export class App extends Component {
  render() {
    return <div>
      <Clock/>
    </div>;
  }
}

export default App;
