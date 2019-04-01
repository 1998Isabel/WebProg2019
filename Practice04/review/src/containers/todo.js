import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles.css';
import Header from '../components/Header.js';
import Section from '../components/Section.js';
import Footer from '../components/Footer.js';
var count = 0;

class item{
  constructor(value, id){
    this.value = value;
    this.id = id;
  }
}

class todo extends Component {
  constructor(props){
    super(props);
    this.state = {list:[]};
  }
  setstatenode = item => this.setState(state => ({list:state.list.concat([item])}))
  createNew = (event) =>{
    if(event.key === 'Enter' && event.target.value !== ''){
      count += 1;
      //this.state.node = this.state.node.concat({value:event.target.value,id:this.state.count});
      const list = event.target.value;
      var itemtmp = new item(list, count);
      this.setstatenode(itemtmp);
      //<List ID={this.state.count} LABEL={this.state.count} />
      event.target.value = '';
      console.log(this.state);
    }
  }
  render() {
    return (
      <div id="root" className="todo-app__root">
        <Header text = "todos" />
        <Section onKeyUp={this.createNew} list={this.state.list}/>
        <Footer /> 
      </div>
    );
  }
}

export default todo;
