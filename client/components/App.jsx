import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
	return (
		<div>
			<ul>
				<li><IndexLink to='/'>Home</IndexLink></li>
				<li><Link to='/about'>About</Link></li>
			</ul>
			<br />
			{ props.children }
		</div>
	);
};

App.propTypes = {
	children: PropTypes.element
};

export default App;
