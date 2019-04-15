import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import './main_styles.css'
import MySocial from './../../components/Footer/MySocial'


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer_content">
                        <div class="footer_logo">My Blog</div>
                        <div class="footer_social">
                            <MySocial></MySocial>
                        </div>
                        <div class="copyright">
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}