import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Form from './Form';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <Form />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
