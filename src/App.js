import React, {useState} from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/Blogposts";
import Login from "./pages/Login";
import TopMenu from './components/topmenu/TopMenu';
import PrivateRoute from "./components/PrivateRoute";
import './App.css';

export default function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    console.log({isAuthenticated});

    return (
        <>
            <div>
                <TopMenu isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
                {/*<p>{`Logedin: ${isAuthenticated}`}</p>*/}
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/login">
                        <Login toggleAuth={toggleIsAuthenticated}/>
                    </Route>
                    <PrivateRoute exact path="/blog/:id" isAuth={isAuthenticated}>
                        <BlogPage/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/blogpost" isAuth={isAuthenticated}>
                        <BlogPostPage/>
                    </PrivateRoute>
                </Switch>
            </div>
        </>
    );
}


