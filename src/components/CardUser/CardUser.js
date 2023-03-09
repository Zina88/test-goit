import React from 'react';
import logo from '../../assets/img/Logo.png';
import css from './CardUser.module.css';
import PropTypes from 'prop-types';
import normalizeNumber from '../../utilities/normalizeNumber';

export default function CardUser({
	users: { user, id, tweets, followers, avatar, isFollow },
	toggleFollow,
}) {
	const normalizeFollowers = normalizeNumber(followers);

	return (
		<div className={css.card}>
			<div className={css.wrapperBackground}>
				<img src={logo} alt={logo} width="76" />
			</div>

			<div className={css.wrapperTweets}>
				<div className={css.wrapperPhoto}>
					<img className={css.avatar} src={avatar} alt={user} />
				</div>
				<div className={css.tweets}>{tweets} tweets</div>
				<div className={css.followers}>{normalizeFollowers} followers</div>
				<button
					onClick={() => toggleFollow(id)}
					className={isFollow ? css.btnFollowing : css.btnFollow}
				>
					{isFollow ? 'Following' : 'Follow'}
				</button>
			</div>
		</div>
	);
}

CardUser.propTypes = {
	users: PropTypes.shape({
		id: PropTypes.number.isRequired,
		tweets: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
		isFollow: PropTypes.bool,
	}).isRequired,
	toggleFollow: PropTypes.func,
};
