import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Container/Counter';
import * as serviceWorker from './serviceWorker';
// import { ReactComponent } from '*.svg';

// ReactDOM.render(<App />, document.getElementById('root'));
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() };
//     }
//     componentDidMount() {
//         setInterval(() => this.tick(), 1000);
//     }
//     tick() {
//         this.setState({ date: new Date() });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Clock />, document.getElementById('root'));


ReactDOM.render(<Counter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
