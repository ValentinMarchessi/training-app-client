import style from './GuestPanel.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function GuestPanel() {
	const navigate=useNavigate()
	return (
		<div className={style.container}>
			<div className={style.buttonA} onClick={()=>navigate('/', {state:'register'})}>
					Sign up
			</div>
			<div className={style.buttonA}>
				<Link style={{ textDecoration: 'none', color: 'inherit' }} className={style.link} to="/">
					Log in
				</Link>
			</div>
		</div>
	);
}