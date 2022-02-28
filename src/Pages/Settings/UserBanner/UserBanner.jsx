import styles from './UserBanner.module.scss';
import { Avatar } from '../../../components';
import { useSelector } from 'react-redux';
import Portada from '../../../assets/images/imageBg.png';

export default function UserBanner() {
    const user = useSelector((store) => store.user.currentUser);
    return (
		<div className={styles.container}>
			<div id={styles.user}>
				<Avatar src={user.profileImg} style={{width: '100px'}} />
				<h1>{user.username}</h1>
			</div>
			<img id={styles.background} src={Portada} alt="background img" />
		</div>
	);
}