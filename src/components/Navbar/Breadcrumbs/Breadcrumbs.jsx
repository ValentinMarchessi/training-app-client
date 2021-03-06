import HomeIcon from '@mui/icons-material/Home';
import style from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import getBreadcrumbs from '../../../helpers/getBreadcrumbs/getBreadcrumbs.ts';
import { Fragment } from 'react';

export default function Breadcrumbs() {
	const location = useLocation();
	const locations = location.pathname.split('/').filter(e => e !== "");
	const breadcrumbs = getBreadcrumbs(location.pathname);
	
	return (
		<div className={style.container}>
			<Link to="/home">
				<HomeIcon className={style.homeItem} />
			</Link>
			{locations.map((e, i) => (
				<Fragment key={`fragment-${i}`}>
					<hr id={style.divider} />
					<span className={style.breadcrumb}>
						{e.replace(/%20/g,' ')}
					</span>
				</Fragment>
			))}
		</div>
	);
}
