import styles from './Loading.module.scss';

export default function Loading() {
    return (
        <svg id={styles.icon}>
            <circle fill='red'></circle>
        </svg>
    )
}