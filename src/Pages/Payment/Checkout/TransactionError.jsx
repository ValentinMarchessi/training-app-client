import styles from './TransactionError.module.scss';

export default function TransactionError() {
    return (
        <div className={styles.error}>
            <h1>:(</h1>
            <h1>An error has ocurred during your purchase</h1>
        </div>
    )
}