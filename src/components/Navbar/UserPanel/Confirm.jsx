import s from "./Confirm.module.scss";
import { logoutUser } from "../../../Redux/reducers/userLoginReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Confirm({ setConfirm }) {
  const user = useSelector((store) => store.user.currentUser);
  const dispatch = useDispatch();
  const redir = useNavigate();

  function onLogout(e) {
    e.preventDefault();
    dispatch(logoutUser(user));
    redir("/");
  }

  function onStay(e) {
    e.preventDefault();
    setConfirm(false);
  }
  return (
    <div className={s.container}>
      <h2>Are you sure?</h2>
      <div>
        <button onClick={onLogout}>Yes</button>
        <button onClick={onStay}>No</button>
      </div>
    </div>
  );
}
