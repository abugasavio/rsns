import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/signupActions';
import { connect } from 'react-redux';

class SignupPage extends Component {
	render() {
		const { userSignupRequest } = this.props;
		return (
			<div>
				<h1>Join us</h1>
				<SignupForm userSignupRequest={userSignupRequest} />
			</div>
		);
	}
}

SignupPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}


export default connect(null, {userSignupRequest})(SignupPage)
