import styles from './Sidebar.module.scss';

export default function Sidebar({ header, children, id }) {
    return (
		<div id={id} className={styles.container}>
            <div id={styles.header}>{header}</div>
            <div className={styles.content}>
                {children}
            </div>
		</div>
	);
}