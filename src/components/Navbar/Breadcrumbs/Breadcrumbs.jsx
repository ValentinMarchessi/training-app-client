import HomeIcon from '@mui/icons-material/Home';
import style from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import getBreadcrumbs from '../../../helpers/getBreadcrumbs/getBreadcrumbs.ts';
import { useSelector } from 'react-redux';

export default function Breadcrumbs() {
	const location = useLocation();
	const locations = location.pathname.split('/').filter(e => e !== "");
	const breadcrumbs = getBreadcrumbs(location.pathname);
	
	return (
		<div className={style.container}>
			<Link to="/home">
				<HomeIcon className={style.homeItem} />
			</Link>
			<hr id={style.divider} />
			{locations.map((e,i) => (
				<div key={i} id={style.div}>{/*Para que dejen de aparecer errores en la consola*/}
					
					<Link className={style.breadcrumb} to={breadcrumbs[i]}>
						{e}
					</Link>
				</div>
			))}
		</div>
	);
}
