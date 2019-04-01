import React, { Component } from 'react';
import Input from './Input.js';
import List from './List.js';

class Section extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
        <section className="todo-app__main">
          <Input onKeyUp={this.props.onKeyUp} />
          <List list={this.props.list} />
        </section>     
    );
  }
}

export default Section;
