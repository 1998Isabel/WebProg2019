import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import './main_styles.css'


export default class Blog extends Component {
    render() {
        return (
            <div className="super_container">
                <Header></Header>
                <Home></Home>
                <PageContent></PageContent>
                <Footer></Footer>
            </div>
        )
    }
}