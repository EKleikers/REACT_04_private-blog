import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export default function PrivateRoute({isAuth, children, ...rest}) {
    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/"/>}
        </Route>
    );
}
