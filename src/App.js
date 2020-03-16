import React, { Component } from "react";
import Input from "./components/input";
import Output from "./components/output";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: []
    };
  }
  render() {
    return (
      <>
        <div className='container container-sm'>
          <Input />
          <Output />
        </div>
      </>
    );
  }
}

export default App;
