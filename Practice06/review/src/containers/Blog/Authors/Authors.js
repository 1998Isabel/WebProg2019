import React, { Component } from "react";

import Post from "../../../components/Post/Post";
import Author from "../../../components/Author/Author";
import FakeDatabase from "../../../fakedatabase/FakeDatabase";
import classes from "./Authors.module.css";

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.database = new FakeDatabase();
    }

    postSelectedHandler = id => {
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push("/authors/" + id);
    };


    postSelectedHandler2 = id => {
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push("/posts/" + id);
    };

    render() {
        const { author } = this.props.match.params;
        console.log(this.props.match.params);
        let display = null;
        if (typeof(author)==="string") {

            // const post = FakeDatabase.getPostByauthor(id);
            // display = post ? (
             display=   FakeDatabase.getAll().filter(post=>post.author==author).map((post, id) => (
                <Post
                    key={id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler2(post.id)}
                />));
            // ) : (
            //     <h1>Not found.</h1>
            // );
        } else {
            let author_list =[];
            FakeDatabase.getAll().forEach(post=>{
                if(post.author && author_list) author_list.push(post.author);
            })
            display = author_list.map((post, id) => (
                <Author
                    key={id}
                    title={post}
                    clicked={() => this.postSelectedHandler(post)}
                />
            ));
        }

        return (
                <div className={classes.posts}>{display}</div>
        );
    }
}
