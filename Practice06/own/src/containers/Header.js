import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import './Blog.css';
import Background from '../background3.jpg';

class Header extends Component {
  render() {
    const Style = {
      width: "100%",
      height: "380px",
      backgroundImage: `url(${Background})`
    };
    return (
      <>
        <div className="header" style={Style}>
          <h1>My Website</h1>
          <h3>A <b>responsive</b> website created by me.</h3>
        </div>
        <div className="navbar">
          <a ><NavLink to="/home">Home</NavLink></a>
          <a ><NavLink to="/activities">Activities</NavLink></a>
          <a ><NavLink to="/posts">Posts</NavLink></a>
          <a className="right"><NavLink to="/contact">Contact Me</NavLink></a>
        </div>
      </>
    );
  }
}

export default Header;
