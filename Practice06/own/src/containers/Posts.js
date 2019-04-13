import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import './Blog.css';
import PostList from './PostList'
import PostRender from './PostRender'
import NewestPost from './NewestPost'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { postlist: ["1", "2", "3", "4", "5", "6"] }
  }
  render() {
    return (
      <div className="row">
        <div className="side">
          <h2>Post Lists</h2>
          <PostList list={this.state.postlist}/>
        </div>
        <Switch>
          <Route exact path="/posts" component={NewestPost} />
          <Route path="/posts/:id?" component={PostRender} />
        </Switch>
      </div>
    );
  }
}

export default Posts;
