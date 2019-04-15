import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import './main_styles.css'


export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                <div className="logo"><a href="#">avision</a></div>
                                <nav className="main_nav">
                                    <ul>
                                        <li className="active"><a href="index.html">Home</a></li>
                                        <li><a href="#">Fashion</a></li>
                                        <li><a href="#">Gadgets</a></li>
                                        <li><a href="#">Lifestyle</a></li>
                                        <li><a href="#">Video</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                                {/* <div className="search_container ml-auto">
                                    <div className="weather">
                                        <div className="temperature">+10°</div>
                                        <img className="weather_icon" src="images/cloud.png" alt="" />
                                        <form action="#">
                                            <input type="search" class="header_search_input" required="required" placeholder="Type to Search..." />
                                            <img className="header_search_icon" src="images/search.png" alt=""></img>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}