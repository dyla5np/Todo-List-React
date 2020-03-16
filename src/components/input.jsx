import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className='input input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter a task'
        />
        <button className='btn btn-primary'>ADD</button>
      </div>
    );
  }
}

export default Input;
