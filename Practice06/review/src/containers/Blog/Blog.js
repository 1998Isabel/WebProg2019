import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import Posts from "./Posts/Posts";
import Authors from "./Authors/Authors";
import NewPost from './NewPost/NewPost'
import Indexpage from "./Home";
import classes from "./Blog.module.css";

export default class Blog extends Component {

    render() {
        return (
            <div>
                <div className={classes.header}> 
                    神秘的部落格
                </div>
                <div className={classes.header_button}> 
                <button className={classes.new_post}>
                     <NavLink
						to="/new-post"
						activeStyle={{ color: '#fa923f' }}
						exact>
						新增文章
					</NavLink>
                </button>
                </div>
                <div className={classes.page_body}>
                    <div className={classes.page_body_left}>
                        <ul className={classes.header_list}>
                            <li> <NavLink to="/" activeStyle={{ color: '#fa923f' }} exact>Home</NavLink></li>
                            <li><NavLink to="/posts"activeStyle={{ color: '#fa923f' }} >Posts</NavLink></li>
                            <li> <NavLink to="/authors" activeStyle={{ color: '#fa923f' }}>Authors</NavLink></li>
                        </ul>
                    </div>
                    <div className={classes.page_body_right}>
                    <Switch>
                        <Route exact path="/" component={Indexpage}/>
                        <Route path="/new-post" component={NewPost} />
                        <Route path="/posts/:id?" component={Posts} />
                        <Route path="/authors/:author?" component={Authors} />
                        {/* <Redirect from="/home" to="/" /> */}
                        <Route render={() => <h1>Not Found.</h1>} />
                    </Switch>
                    </div>
                </div>
                
            </div>
        );
    }
}



