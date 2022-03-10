//STYLES
import S from "./Settings.module.scss";
//MUI ICONS
import SettingsIcon from "@mui/icons-material/Settings";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
//HOOKS
import { Outlet, Link } from "react-router-dom";
//COMPONENTS
import Sidebar from "./Sidebar/Sidebar";
import UserBanner from "./UserBanner/UserBanner";

export default function Settings() {
  return (
		<div className={S.page}>
			<Sidebar
				id={S.sidebar}
				header={
					<>
						<SettingsIcon id={S.icon} />
						<h2>Settings</h2>
					</>
				}>
				<Link to="">Account</Link>
				<Link to="profile">Profile</Link>
				<Link to="payment">Payment</Link>
			</Sidebar>
		  	<div className={S.midContainer}>
			  <UserBanner />
			  <Outlet/>
			</div>
			<div className={S.containerBtn}>
				<Link to='/home'>
					<CloseRoundedIcon className={S.btnIcon} />
				</Link>
				<p>Exit</p>
			</div>
		</div>
  );
}
