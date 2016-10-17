import React, { Component } from 'react'
import { Menu, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router';

const NavigationBar = React.createClass({
	render() {
		return (
			<Menu color='orange' inverted>
          <Menu.Item name='home' >
						<Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item name='messages' />
          <Menu.Item name='friends'  />

	        <Menu.Menu position='right'>
	        	<Menu.Item>
	        		<Link to='/signup'>Signup</Link>
	        	</Menu.Item>
	        </Menu.Menu>
        </Menu>

		);
	}
});


export default NavigationBar;
