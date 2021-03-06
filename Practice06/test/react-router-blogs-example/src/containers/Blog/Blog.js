import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import classes from './Blog.module.css'

export default class Blog extends Component {
	render() {
		return (
			<div>
				<header className={classes.header}>
					<ul className={classes.navlist}>
						<li className={classes.navitem}>
							<NavLink to="/posts" activeStyle={{ color: '#fa923f' }} exact>
								Posts
							</NavLink>
						</li>
						<li className={classes.navitem}>
							<NavLink
								to="/new-post"
								activeStyle={{ color: '#fa923f' }}
								exact>
								New Post
							</NavLink>
						</li>
					</ul>
				</header>
				<Switch>
					<Route path="/new-post" component={NewPost} />
					<Route path="/posts/:id?" component={Posts} />
					<Route render={() => <h1>Not Found.</h1>} />
				</Switch>
			</div>
		)
	}
}
