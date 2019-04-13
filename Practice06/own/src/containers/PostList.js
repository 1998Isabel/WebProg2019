import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import './Blog.css';

class PostList extends Component {
  render() {
    const postIDs = this.props.list;
    console.log(postIDs)
    const list = postIDs.map((i, index) => (
      <li key={index} className="post_list" styles="height:200px;">
        <NavLink to={"/posts/" + i}>Posts #{i}</NavLink>
      </li>
    ));
    return (
      <ul>{list}</ul>
    );
  }
}

export default PostList;
