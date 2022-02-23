import React, { useState } from 'react';
import Avatar from '../../components/Avatar/Avatar';
import avatarPlaceholder from '../../assets/images/avatarPlaceholder.svg';

import style from './Navbar.module.scss';

import GuestPanel from './GuestPanel/GuestPanel';
import UserPanel from './UserPanel/UserPanel';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

import avatarMock from '../../assets/images/noUser.jpg'

// const user = {
// 	name: 'Eve',
// 	avatar: avatarMock,
// };


const Navbar = (user) => {
	let thisUser = user.user
	return (
		<div className={style.container}>
			<Breadcrumbs />
			<div className={style.userArea}>
			{thisUser
			?(<>
				<p id={style.username}>{thisUser.name}</p>
				<Avatar src={thisUser.profileImg??avatarMock}/>
				<UserPanel />
			</>)
			:<GuestPanel />}

			</div>
		</div>
	);
};

export default Navbar;
