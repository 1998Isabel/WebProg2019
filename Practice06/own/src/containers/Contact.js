import React, { Component } from 'react';
import './Blog.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h2>Contact Me</h2>
        <input placeholder="Write me something in the comment..."/>
        <p>Hope you get a good comment, too!</p>
      </div>
    );
  }
}

export default Contact;
