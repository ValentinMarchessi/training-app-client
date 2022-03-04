import styles from './Error.module.scss';

export default function Error() {
    return (
        <div className={styles.error}>
            <h1>:(</h1>
            <h1>An error has ocurred during your purchase</h1>
        </div>
    )
}