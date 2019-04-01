import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div id="root" class="todo-app__root">
        <header class="todo-app__header">
          <h1 class="todo-app__title">todos</h1>
        </header>
        <section class="todo-app__main">
          <input class="todo-app__input" placeholder="what needs to be done"></input>
        </section>
        {/*
        <footer class="todo-app__footer" id="todo-footer">
          <div class="todo-app__total"></div>
          <ul class="todo-app__view-buttons"></ul>
          <div class="todo-app__clean"></div>
        </footer>
        */}
      </div>
    );
  }
}

export default App;
