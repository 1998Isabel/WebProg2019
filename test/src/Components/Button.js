import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

export default Button;