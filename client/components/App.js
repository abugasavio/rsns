import React from 'react';
import NavigationBar from './NavigationBar';

const App = React.createClass({
	render() {
		return (
		<div>
			<NavigationBar />
			<div className="ui container">
				{this.props.children}
			</div>
		</div>
	);
	}
})

export default App;
