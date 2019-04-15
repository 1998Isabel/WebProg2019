import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import './main_styles.css'


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home_slider_container">
                    <div className="owl-carousel owl-theme home_slider">
                        <div className="owl-item">
                            <div className="home_slider_background" styles="background-image:url(home_slider.jpg)"></div>
                            <div className="home_slider_content_container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="home_slider_content">
                                                {/* <div className="home_slider_item_category trans_200"><a href="category.html" className="trans_200">sport</a></div>
                                                <div className="home_slider_item_title">
                                                    <a href="post.html">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</a>
                                                </div>
                                                <div className="home_slider_item_link">
                                                    <a href="post.html" class="trans_200">Continue Reading
                                                        <svg version="1.1" id="link_arrow_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                                    width="19px" height="13px" viewBox="0 0 19 13" enable-background="new 0 0 19 13" xml:space="preserve">
                                                            <polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 " />
                                                        </svg>
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}