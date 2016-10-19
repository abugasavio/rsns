import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Menu, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router';
import { logout } from '../actions/authActions';

const NavigationBar = React.createClass({
 	propTypes: {
	  auth: React.PropTypes.object.isRequired,
	  logout: React.PropTypes.func.isRequired
	},

	logout(e) {
		e.preventDefault();
		this.props.logout();
	},

	render() {
		const { isAuthenticated } = this.props.auth;

		const userLinks = (
			<Menu.Menu position='right'>
      <Menu.Item>
				<Link to='/logout' onClick={this.logout}>Logout</Link>
    	</Menu.Item>
    	</Menu.Menu>
    );

    const guestLinks = (
			<Menu.Menu position='right'>
      	<Menu.Item>
      		<Link to='/signup'>Signup</Link>
      	</Menu.Item>
      	<Menu.Item>
					<Link to='/login'>Login</Link>
      	</Menu.Item>
			</Menu.Menu>
    );
		return (
			<Menu color='orange' inverted>
				 { isAuthenticated ? userLinks : guestLinks }
      </Menu>

		);
	}
});

function mapStateToProps(state) {
	return {
		auth: state.auth
	};

}

export default connect(mapStateToProps, {logout})(NavigationBar);
