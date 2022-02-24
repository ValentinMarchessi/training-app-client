import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './NetworkContainer.module.scss';

export default function NetworkContainer({id}) {
	return (
		<div id={id} className={styles.containerNetworks}>
			<label>Linked with </label>
			<div className={styles.containerIcons}>
				<GoogleIcon className={styles.icon} />
				<FacebookOutlinedIcon className={styles.icon} />
				<TwitterIcon className={styles.icon} />
			</div>
		</div>
	);
}
