import React from 'react';
import logo from '../../assets/img/Logo.png';
import picture from '../../assets/img/picture.png';
import ellips from '../../assets/img/Ellipse.png';
import css from './CardUser.module.css';
import PropTypes from 'prop-types';

import useLocalStorage from '../../hooks/localStorage';

export default function User({ users: { user, id, tweets, followers, avatar } }) {
	const KEY_FOLLOWERS = `followers ${id}`;
	const KEY_BTN = `btn ${id}`;

	const [btn, setBtn] = useLocalStorage(KEY_BTN, false);
	const [follower, setFollower] = useLocalStorage(KEY_FOLLOWERS, followers);

	const toggleBtn = () => {
		if (!btn) {
			setFollower(prevState => prevState + 1);
			setBtn(!btn);
		} else {
			setFollower(prevState => prevState - 1);
			setBtn(!btn);
		}
	};

	const withPoint = follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return (
		<div className={css.card}>
			<div className={css.wrapperLogo}>
				<img src={logo} alt={logo} width="76" />
			</div>
			<div className={css.wrapperPicture}>
				<img src={picture} alt={picture} width="308" />
			</div>

			<div className={css.line}>
				<div className={css.wrapperEllipse}>
					<img src={ellips} alt={ellips} />
				</div>
				<div className={css.wrapperPhoto}>
					<img className={css.avatar} src={avatar} alt={user} />
				</div>
			</div>

			<div className={css.tweets}>{tweets} tweets</div>
			<div className={css.followers}>{withPoint} followers</div>

			<button
				onClick={() => {
					toggleBtn(id);
				}}
				className={!btn ? css.btnFollow : css.btnFollowing}
			>
				{!btn ? 'Follow' : 'Following'}
			</button>
		</div>
	);
}

User.propTypes = {
	users: PropTypes.shape({
		id: PropTypes.number.isRequired,
		tweets: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
	}).isRequired,
};
