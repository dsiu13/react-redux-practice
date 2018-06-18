import React, { Component } from 'react';

export default class App extends Component {

  addHandler = () => {
    console.log('Add')
  }

  minusHandler = () => {
    console.log('Minus')
  }


  render() {
    return (
      <div>
        <button onClick={this.minusHandler}>Subtract</button>
        <button onClick={this.addHandler}>Add</button>
      </div>
    );
  }
}
