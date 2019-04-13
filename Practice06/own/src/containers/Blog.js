import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import './Blog.css';
import Header from './Header'
import Home from './Home'
import Activities from './Activities'
import Posts from './Posts'
import Contact from './Contact'
import Footer from './Footer'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { now: "Home" }
  }
  render() {
    return (
      <>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/activities" component={Activities} />
          <Route path="/posts" component={Posts} />
          <Route path="/contact" component={Contact} />
          <Redirect from="/home" to="/" />
        </Switch>
        <Footer></Footer>
      </>
    );
  }
}

export default Blog;
