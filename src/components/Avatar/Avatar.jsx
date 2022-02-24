import styles from './Avatar.module.scss';
import placeholder from '../../assets/images/avatarPlaceholder.svg';

export default function Avatar({ src, style }) {
    return (
		<div id={styles.placeholder}>
			<img style={style} className={styles.avatar} src={src || placeholder} />
		</div>
	);
}