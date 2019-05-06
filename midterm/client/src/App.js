import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { apiResponse: "" };
    //this.state = { users: []}
  }
  // callAPI() {
  //     fetch("http://localhost:9000/testAPI")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  // }
  // componentWillMount() {
  //     this.callAPI();
  // }
  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{this.state.apiResponse}</p>
          {/* {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )} */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
