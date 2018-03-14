import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput username="randomUser" />
      </div>
    );
  }
}

export default App;
