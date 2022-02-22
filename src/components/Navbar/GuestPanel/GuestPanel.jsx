import style from './GuestPanel.module.scss';
import { Link } from 'react-router-dom';

export default function GuestPanel() {
	return (
		<div className={style.container}>
			<div className={style.buttonA}>
				<Link style={{ textDecoration: 'none', color: 'inherit' }} className={style.link} to="/landing">
					Sign up
				</Link>
			</div>
			<div className={style.buttonA}>
				<Link style={{ textDecoration: 'none', color: 'inherit' }} className={style.link} to="/landing">
					Log in
				</Link>
			</div>
		</div>
	);
}
