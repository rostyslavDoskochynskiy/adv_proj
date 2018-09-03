import React, {Component} from 'react';
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";
import {Route, NavLink} from "react-router-dom";

class AuthPage extends Component {
    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <NavLink to="/auth/signin" activeStyle={{color: 'red'}}>Sign in</NavLink>
                <NavLink to="/auth/signup" activeStyle={{color: 'red'}}>Sign up</NavLink>
                <Route path="/auth/signin" render={() => <SignInForm onSubmit={this.handleSignIn}/>}/>
                <Route path="/auth/signup" render={() => <SignUpForm onSubmit={this.handleSignUp}/>}/>
            </div>
        );
    }

    handleSignIn = (values) => console.log('-----', values);
    handleSignUp = (values) => console.log('-----', values);
}

export default AuthPage;