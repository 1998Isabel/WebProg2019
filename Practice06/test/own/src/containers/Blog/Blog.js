import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import './main_styles.css'
import Header from './Header'
import Home from './Home'
// import Page from './Page'
import Footer from './Footer'


export default class Blog extends Component {
    render() {
        return (
            <div className="super_container">
                <Header></Header>
                <Home></Home>
                {/* <Page></Page> */}
                <Footer></Footer>
            </div>
        )
    }
}