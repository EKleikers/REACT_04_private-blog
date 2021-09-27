import React from 'react';
import posts from '../data/posts.json';
import {Link} from 'react-router-dom';

//this is an individual blog
export default function BlogPostPage() {

    return (
        <>
            <div className="page-container">

                <h1>Blog overzichtspagina </h1>
                <h3>Aantal blogposts: {posts.length}</h3>
                <ul>
                    {posts.map((post) =>
                        <li>
                            <Link to={`/blog/${post.id - 1}`}>
                                {post.title} {/*{post.id}*/}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
