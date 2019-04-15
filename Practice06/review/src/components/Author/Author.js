import React from 'react'

import classes from './Author.module.css'

const Author = props => (
	<article className={classes.Post} onClick={props.clicked}>
		<h1 className={classes.title}>{props.title}</h1>
	</article>
)

export default Author
