import HomeIcon from '@mui/icons-material/Home';
import style from './Breadcrumbs.module.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Breadcrumbs() {
  	const redir = useNavigate();
	return (
		<div className={style.container}>
			<HomeIcon
				className="homeItem"
				onClick={() => {
					redir('/home');
				}}
			/>
            <span className={style.breadcrumb}>Home</span>
		</div>
	);
}
