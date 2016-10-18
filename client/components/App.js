import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

const App = React.createClass({
	render() {
		return (
		<div>
			<NavigationBar />
			<div className="ui container">
				<FlashMessagesList />
				{this.props.children}
			</div>
		</div>
	);
	}
})

export default App;
