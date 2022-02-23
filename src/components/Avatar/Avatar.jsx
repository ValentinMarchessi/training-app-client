import styles from './Avatar.module.scss';

export default function Avatar({ alt, src, style }) {
    return <img style={style} className={styles.avatar} alt={alt} src={src}/>
}