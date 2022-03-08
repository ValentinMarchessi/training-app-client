import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Dropdown } from "../../../components";

import style from "./UserPanel.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HistoryIcon from "@mui/icons-material/History";

import Confirm from "./Confirm";

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
					<button>History</button>
				</div>
				<div className={style.item}>
					<SettingsIcon />
					<button onClick={handleSettings}>Settings</button>
				</div>
				<div id={style.logout} className={style.item}>
					<LogoutIcon />
					<button onClick={handleLogOut}>Log Out</button>
				</div>
			</Dropdown>
		</div>
	);
}
