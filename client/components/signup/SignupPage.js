import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';
import { connect } from 'react-redux';

class SignupPage extends Component {
	render() {
		const { userSignupRequest, addFlashMessage } = this.props;
		return (
			<div>
				<h1>Join us</h1>
				<SignupForm isUserExists={this.props.isUserExists} userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
			</div>
		);
	}
}

SignupPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired,
	isUserExists: React.PropTypes.func.isRequired
}


export default connect(null, {userSignupRequest, addFlashMessage, isUserExists})(SignupPage)
