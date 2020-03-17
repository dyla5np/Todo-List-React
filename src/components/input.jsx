import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <form className='App'>
        <div className='input input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter a task'
          />
          <button className='btn btn-primary' onClick={this.props.onAdd}>
            ADD
          </button>
        </div>
      </form>
    );
  }
}

export default Input;
