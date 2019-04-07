import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Inputbox extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <input type="text" 
                placeholder="Enter a number..."
                onKeyPress={this.props.onKeyPress}
         />
        )
    }
}

export default Inputbox;