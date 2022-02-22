import HomeIcon from '@mui/icons-material/Home';
import style from './Breadcrumbs.module.scss';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
	const location = useLocation();
	const redir = useNavigate();
	
	console.log(location);
	return (
		<div className={style.container}>
			<HomeIcon
				className={style.homeItem}
				onClick={() => {
					redir('/home');
				}}
			/>
            <span className={style.breadcrumb}>Home</span>
		</div>
	);
}
