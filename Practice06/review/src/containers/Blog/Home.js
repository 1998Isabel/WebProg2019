import React from "react";
import classes from "./Home.module.css"

var li_key = 0;
export default () => {
    const todo = ['Directory structures -- Please refer to Pracrice04 ',
    '就是把你 Practce03 的 Static Blog Page 加上 React Router!',
    '練習重點：從 View -> modules -> pages -> routing -> data',
    'Practice submission deadline: 9pm, Sunday, 04/14',
    'Review deadline: 9pm, Tuesday, 04/16']
    return (
        <article>
            <div className={classes.wrapper}>
            <h1>Welcome</h1>
            <h3>Pracrice06 -- Serverless Blog Page with React Router </h3>
            <ul>
                {todo.map((e)=>(<li key={li_key++}>{e}</li>))}
            </ul>
            </div>
        </article>
    );
};
