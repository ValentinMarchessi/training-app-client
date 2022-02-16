//STYLES
import S from "./Settings.module.scss";
//MUI ICONS
import SettingsIcon from "@mui/icons-material/Settings";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
//IMAGES (Estáticas por el momento)
import Portada from "../../assets/images/imageBg.png";
import User from "../../assets/images/imageUser.jpg";

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
      <div className={S.containerContentCenter}>
        <div className={S.containerImg}>
          <img src={Portada} alt="background img" />
        </div>
        <div className={S.containerUser}>
          <img src={User} alt="img user" />
          <p>User Name</p>
          <input type="button" value="Delete account" />
        </div>
        <div className={S.containerForm}>
          <form className={S.containerInputs}>
            <label>User Name</label>
            <div>
              <input type="text" />
              <input className={S.inputBtn} type="button" value="Edit" />
            </div>
            <label>Email</label>
            <div>
              <input type="text" />
              <input className={S.inputBtn} type="button" value="Edit" />
            </div>
          </form>
          <div className={S.containerNetworks}>
            <label>Linked with </label>
            <div className={S.containerIcons}>
              <GoogleIcon className={S.icon} />
              <FacebookOutlinedIcon className={S.icon} />
              <TwitterIcon className={S.icon} />
            </div>
          </div>
          <div className={S.formBtn}>
            <button>Change password</button>
          </div>
        </div>
      </div>
      <div className={S.containerBtn}>
        <button>
          <CloseRoundedIcon className={S.btnIcon} />
        </button>
        <p>Exit</p>
      </div>
    </div>
  );
}
