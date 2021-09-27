import React from 'react';
import posts from '../data/posts.json';
import {Link, useParams} from 'react-router-dom';

//this is the overview of all blogs
export default function BlogPage() {

    const {id} = useParams();

    return (
        <>
            <fieldset>
                <h1>{posts[id].title}</h1>
                <h2>{posts[id].date}</h2>
                <p>{posts[id].content}</p>
            </fieldset>

            <fieldset>
                <Link to={"/"}>Terug naar Home</Link>
            </fieldset>
        < />
    )
}
