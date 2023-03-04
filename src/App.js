import React from 'react';
import CardUser from './components/CardUser';
import users from './users.json';
import PropTypes from 'prop-types';

export function App() {
	return (
		<>
			<CardUser users={users} />
		</>
	);
}

export default App;

App.propTypes = {
	users: PropTypes.array,
};
