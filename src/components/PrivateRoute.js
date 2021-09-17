import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {

    const { currentUser } = useAuth();
    const { user } = useAuth();

    return (
        <div>
            <Route {...rest}
                   render={props => {
                    return localStorage.getItem("authToken") ? <Component {...props} /> : <Redirect to='/' />
                   }}
            >
            </Route>
        </div>
    )
}
