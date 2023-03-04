import { User } from './User.js';
import css from './CardUser.module.css';
import PropTypes from 'prop-types';

export default function CardUser({ users }) {
	return (
		<div className={css.container}>
			{users.map(users => (
				<li className={css.item} key={users.id}>
					<User users={users} />
				</li>
			))}
		</div>
	);
}

CardUser.propTypes = {
	users: PropTypes.array,
};
