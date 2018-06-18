import React, { Component } from 'react';

export default class App extends Component {

  addHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  minusHandler = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  state = {
    count:0
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.minusHandler}>Subtract</button>
        <button onClick={this.addHandler}>Add</button>
      </div>
    );
  }
}
