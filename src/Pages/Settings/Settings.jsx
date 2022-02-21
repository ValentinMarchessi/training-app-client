//STYLES
import S from "./Settings.module.scss";
//MUI ICONS
import SettingsIcon from "@mui/icons-material/Settings";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
//HOOKS
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
//COMPONENTS
import ContainerUser from "../../components/ContainerUser/ContainerUser";

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
    <div className={S.container}>
      <div className={S.containerSideMenu}>
        <div className={S.containerSideMenuTitle}>
          <SettingsIcon className={S.menuIcon} />
          <h2>Settings</h2>
        </div>
        <ul className={S.contentSideMenu}>
          <li onClick={(e) => onClick(e)}>Account data</li>
          <li onClick={(e) => onClick(e)}>Profile</li>
          <li onClick={(e) => onClick(e)}>Payment method</li>
          <li onClick={(e) => onClick(e)}>History user</li>
        </ul>
      </div>
      <ContainerUser config={config} />
      <div className={S.containerBtn}>
        <button onClick={onRedir}>
          <CloseRoundedIcon className={S.btnIcon} />
        </button>
        <p>Exit</p>
      </div>
    </div>
  );
}
