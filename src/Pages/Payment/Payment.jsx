import styles from './Payment.module.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

export default function Payment() {

    return (
		<>
			<Navbar />
			<div className={styles.page}>
				<Outlet/>
			</div>
		</>
	);
}
