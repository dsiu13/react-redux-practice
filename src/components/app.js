import React, { Component } from 'react';
import CounterButtons from './counter_btns';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <CounterButtons />
      </div>
    );
  }
}
