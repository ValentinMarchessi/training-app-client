//STYLES
import S from "./Settings.module.scss";
//MUI ICONS
import SettingsIcon from "@mui/icons-material/Settings";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
//HOOKS
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
//COMPONENTS
import ContainerUser from "./ContainerUser/ContainerUser";
import Sidebar from "./Sidebar/Sidebar";

export default function Settings() {
  const [config, setConfig] = useState("Account data");
  const redir = useNavigate()

  function onClick(e) {
    setConfig(e.target.textContent);
  }
  function onRedir() {
    redir('/')
  }

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
				<Link to="">Account data</Link>
				<Link to="profile">Profile</Link>
				<Link to="payment">Payment method</Link>
				<Link to="history">History user</Link>
      </Sidebar>
      
      <ContainerUser />
      
			<div className={S.containerBtn}>
				<button onClick={onRedir}>
					<CloseRoundedIcon className={S.btnIcon} />
				</button>
				<p>Exit</p>
			</div>
		</div>
  );
}
