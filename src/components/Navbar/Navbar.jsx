import Avatar from '../../components/Avatar/Avatar';
import avatarPlaceholder from '../../assets/images/avatarPlaceholder.svg';

import style from './Navbar.module.scss';

import GuestPanel from './GuestPanel/GuestPanel';
import UserPanel from './UserPanel/UserPanel';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { useSelector } from 'react-redux';


const Navbar = () => {
	const user = useSelector(store => store.user.currentUser)
	return (
		<div className={style.container}>
			<Breadcrumbs />
			<div className={style.userArea}>
				<p id={style.username}>{user ? user.username : 'Guest'}</p>
				<Avatar src={user && user.profileImg ? user.profileImg : avatarPlaceholder} style={{height: '50px'}}/>
				{user ? <UserPanel /> : <GuestPanel />}
			</div>
		</div>
	);
};

export default Navbar;
