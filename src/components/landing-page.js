import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        
        <div className="home">
            <div className="info">
            Track your dogs eating, walking and defecation habits with an easy to fill out form and daily overview. 
            </div>
            <LoginForm />
            <Link to="/register">Register</Link>
            <br/>
            Demo Username: demo
            <br/>
            Demo Password: demopassword
            
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);