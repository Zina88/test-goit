import React from 'react';
import CardUserList from './components/CardUserList';
import initialUsers from './users.json';
import PropTypes from 'prop-types';
import useLocalStorage from 'hooks/localStorage';

export default function App() {
	const [users, setUsers] = useLocalStorage('users', initialUsers);

	const toggleFollow = id => {
		setUsers(users =>
			users.map(user => {
				if (user.id === id) {
					return {
						...user,
						followers: user.isFollow ? user.followers - 1 : user.followers + 1,
						isFollow: user.isFollow ? false : true,
					};
				}
				return user;
			}),
		);
	};

	return (
		<>
			<CardUserList users={users} toggleFollow={toggleFollow} />
		</>
	);
}

App.propTypes = {
	users: PropTypes.array,
	toggleFollow: PropTypes.func,
};
