import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: []
    };
  }

  handleAdd = e => {
    e.preventDefault();
    this.setState({
      task: "",
      taskList: [...this.state.taskList, this.state.task]
    });
  };

  onChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleDelete = task => {
    const taskList = this.state.taskList.filter(t => t !== task);
    this.setState({
      taskList
    });
  };

  render() {
    return (
      <form className='App'>
        <div className='input input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter a task'
            value={this.state.task}
            onChange={this.onChange}
          />
          <button className='btn btn-primary' onClick={this.handleAdd}>
            ADD
          </button>
        </div>
        <div className='output' id='output'>
          <ul className='list-group'>
            {this.state.taskList.map((task, index) => (
              <li
                className='list-group-item'
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center"
                }}>
                {task}
                <div className='input-group-prepend'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => this.handleDelete(task)}>
                    Done
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </form>
    );
  }
}

export default Todo;
