//STYLES
import S from "./ContainerUser.module.scss";
//COMPONENTS
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from '../../../components';


export default function ContainerUser() {
  const user = useSelector(store => store.user.currentUser);
  console.log(user)
  return (
		<div className={S.containerContentCenter}>
      <div className={S.containerUser}>
        <div id={S.user}>
          <Avatar src={user.profileImg}/>
          <h1>{user.username}</h1>
        </div>
				<input type="button" value="Delete account" />
			</div>
			<Outlet />
		</div>
  );
}
