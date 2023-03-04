import React from 'react';
import CardUserList from './components/CardUserList';
import users from './users.json';
import PropTypes from 'prop-types';

export default function App() {
	return (
		<>
			<CardUserList users={users} />
		</>
	);
}

App.propTypes = {
	users: PropTypes.array,
};
