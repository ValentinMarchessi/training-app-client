import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../Redux/reducers/userLoginReducer';

import { Dropdown } from '../../../components';

import style from './UserPanel.module.scss';

import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';

export default function UserPanel() {
	const user = useSelector((store) => store.user.currentUser);
	const dispatch = useDispatch();

	const redir = useNavigate();

	function handleSettings() {
		redir('/settings');
	}

	const handleLogOut = (e) => {
		e.preventDefault();
		dispatch(logoutUser(user));
	};

	return (
		<div className={style.contentMenu}>
			<Dropdown ToggleElement={<MenuIcon/>} align="right">
				<div className={style.item}>
					<HistoryIcon />
					<a>History</a>
				</div>
				<div className={style.item}>
					<SettingsIcon />
					<a onClick={handleSettings}>Settings</a>
				</div>
				<div id={style.logout} className={style.item}>
					<LogoutIcon />
					<a onClick={handleLogOut}>Log Out</a>
				</div>
			</Dropdown>
		</div>
	);
}
