//STYLES
import S from "./ContainerUser.module.scss";
//IMAGES (Estáticas por el momento)
import User from "../../assets/images/imageUser.jpg";
//COMPONENTS
import AccountUser from '../AccountUser/AccountUser'
import ProfileUser from '../../components/ProfileUser/ProfileUser'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'
import HistoryUser from '../../components/HistoryUser/HistoryUser'


export default function ContainerUser() {
  return (
    <div className={S.containerContentCenter}>
      <div className={S.containerUser}>
        <img src={User} alt="img user" />
        <p>User Name</p>
        <input type="button" value="Delete account" />
      </div>
      <PaymentMethod/>
    </div>
  );
}
