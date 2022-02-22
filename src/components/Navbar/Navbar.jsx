import React, { useState } from 'react';
import Avatar from '../../components/Avatar/Avatar';
import avatarPlaceholder from '../../assets/images/avatarPlaceholder.svg';

import style from './Navbar.module.scss';

import GuestPanel from './GuestPanel/GuestPanel';
import UserPanel from './UserPanel/UserPanel';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

import avatarMock from '../../assets/images/imageUser.jpg'

const user = {
	name: 'Eve',
	avatar: avatarMock,
};


const Navbar = () => {
	return (
		<div className={style.container}>
			<Breadcrumbs />
			<div className={style.userArea}>
        		<p id={style.username}>{user ? user.name : 'Guest'}</p>
				<Avatar src={user ? user.avatar : avatarPlaceholder} />
				{user ? <UserPanel /> : <GuestPanel />}
			</div>
		</div>
	);
};

export default Navbar;
