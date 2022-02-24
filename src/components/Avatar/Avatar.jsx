import styles from './Avatar.module.scss';
import placeholder from '../../assets/images/avatarPlaceholder.svg';

export default function Avatar({ src, style }) {
    return <img style={style} className={styles.avatar} alt="avatar" src={src || placeholder} />;
}