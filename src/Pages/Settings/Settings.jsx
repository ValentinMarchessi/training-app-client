//STYLES
import S from "./Settings.module.scss";
//MUI ICONS
import SettingsIcon from "@mui/icons-material/Settings";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

//COMPONENTS
import ContainerUser from "../../components/ContainerUser/ContainerUser";

export default function Settings() {
  return (
    <div className={S.container}>
      <div className={S.containerSideMenu}>
        <div className={S.containerSideMenuTitle}>
          <SettingsIcon className={S.menuIcon} />
          <h2>Settings</h2>
        </div>
        <ul className={S.contentSideMenu}>
          <li>Account data</li>
          <li>Profile</li>
          <li>Payment method</li>
        </ul>
      </div>
      <ContainerUser />
      <div className={S.containerBtn}>
        <button>
          <CloseRoundedIcon className={S.btnIcon} />
        </button>
        <p>Exit</p>
      </div>
    </div>
  );
}
