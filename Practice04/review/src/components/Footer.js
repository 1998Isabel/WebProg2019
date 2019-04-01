import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles.css';

class Footer extends Component {
  render() {
    return (
      <footer className="todo-app__footer" id="todo-footer">
        <div className="todo-app__total">
          <p>0 left</p>
        </div>
        <ul className="todo-app__view-buttons">
          <button id="all">All</button>
          <button id="active">Active</button>
          <button id="Completed">Completed</button>
        </ul>
        <div className="todo-app__clean">
          <button id="Clear">Clear Completed</button>
        </div>
      </footer>
    );
    
  }
}

export default Footer;
