import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: "awesomeUser"
  };

  changeUsernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.changeUsernameHandler}
          value={this.state.username}
        />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
