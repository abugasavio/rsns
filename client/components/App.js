import React from 'react';
import NavigationBar from './NavigationBar';

const App = React.createClass({
	render() {
		return (
		<div className="ui container">
			<NavigationBar />
			{this.props.children}
		</div>
	);
	}
})

export default App;
