import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Button from './../Components/Button';
import Inputbox from './../Components/Inputbox'

class Counter extends React.Component {
  constructor(props){
      super(props);
      this.state = {value : 100};
  }
  handleClickPlus = () => this.setState(state => ({ value: state.value + 1 })); //use arrow function
  handleClickMinus = () => this.setState(state => ({ value: state.value - 1 }));
  setNumber = num => this.setState(() => ({ value: num }));
  handleInput = e => {
    if (e.key === "Enter") {
      const value = parseInt(e.target.value);
      if (value === 0 || value) this.setNumber(value);
      e.target.value = "";
      // e.target.blur();
    }
  };
  render() {
      return (
          <div>
              <h1>{this.state.value}</h1>
              <Button text="+" onClick={this.handleClickPlus}></Button>
              <Button text="-" onClick={this.handleClickMinus}></Button>
              <Inputbox onKeyPress={this.handleInput} />
          </div>
      );
  }
}

export default Counter;
