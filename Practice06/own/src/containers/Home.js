import React, { Component } from 'react';
import './Blog.css';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="side">
          <h2>About Me</h2>
          <h4>Photo of me:</h4>
          <img src="https://woundero.files.wordpress.com/2013/02/volleyball.jpg" alt="" />
          <p>Guess who am I...</p>
          <h3>More Text</h3>
          <p>More about me</p>
          <div className="fakeimg" styles="height:60px;">Image</div><br />
          <div className="fakeimg" styles="height:60px;">Image</div><br />
          <div className="fakeimg" styles="height:60px;">Image</div>
        </div>
        <div className="main">
          <h2>A Blog About Volleyball</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <img src="http://tvl.ctvba.org.tw/wp-content/uploads/2018/10/-1023-%E5%B9%B3%E9%9D%A2%E5%8C%96-616X290-1-e1540953826903.png" alt="" />
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <br />
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className="fakeimg" styles="height:200px;">Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
    );
  }
}

export default Home;
