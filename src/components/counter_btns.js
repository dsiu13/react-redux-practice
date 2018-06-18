import React from 'react';

const Counter_Buttons = () => {

  addHandler = () => {
    console.log('Add')
  }

  minusHandler = () => {
    console.log('Minus')
  }

  return (
    <div>
      <button onClick={this.minusHandler}>minus</button>
      <button onClick={this.addHandler}>Add</button>
    </div>
  );
}

export default Counter_Buttons;
