import React, { Component } from "react";
import "./App.css";
import Clock from "./components/controls/clock/Clock";
import Header from "./components/controls/clock/Header";

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
