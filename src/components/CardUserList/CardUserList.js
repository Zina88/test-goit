import User from '../../components/CardUser';
import css from './CardUserList.module.css';
import PropTypes from 'prop-types';

export default function CardUserList({ users }) {
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

CardUserList.propTypes = {
	users: PropTypes.array,
};
