import CardUser from '../../components/CardUser';
import css from './CardUserList.module.css';
import PropTypes from 'prop-types';

export default function CardUserList({ users, toggleFollow }) {
	return (
		<div className={css.container}>
			{users.map(users => (
				<li className={css.item} key={users.id} >
					<CardUser users={users} toggleFollow={toggleFollow}/>
				</li>
			))}
		</div>
	);
}

CardUserList.propTypes = {
	users: PropTypes.array,
	toggleFollow: PropTypes.func,
};
