import React, { Component } from "react";
import Todo from "./components/todo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className='container container-sm'>
          <Todo />
        </div>
      </>
    );
  }
}

export default App;
