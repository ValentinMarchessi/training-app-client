//STYLES
import S from "./AccountUser.module.scss";
//MUI ICONS
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function AccountUser() {
  return (
    <div className={S.container}>
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
  );
}
