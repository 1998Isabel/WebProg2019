import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <h1 className="todo-app__title">{this.props.text}</h1>
      </header>
    );
  }
}

export default Header;
