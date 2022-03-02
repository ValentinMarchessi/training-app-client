import style from './RoutineBox.module.scss';
import AvatarGroup from '../../../components/AvatarGroup/AvatarGroup.jsx';
import CircuitPill from '../CircuitPill/CircuitPill.jsx';
import DietPill from '../DietPill/DietPill';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRoutine } from '../../../Redux/apiCalls/rutinesCall/getUsersRoutine';

export default function RoutineBox({ id,title, diet }) {
	// const users1= [
	// 	{ name: 'Tony Stark', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
	// 	{ name: 'Steve Rogers', avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg' },
	// 	{ name: 'Natasha Romanoff', avatar: 'https://es.web.img3.acsta.net/r_1280_720/newsv7/21/07/06/11/37/3498224.jpg' },
	// 	{ name: 'Thor', avatar: 'https://www.quever.news/u/fotografias/m/2020/9/12/f850x638-1140_78629_4825.jpg' },
	// 	{ name: 'Loki', avatar: 'https://as01.epimg.net/meristation/imagenes/2021/04/05/noticias/1617630043_282201_1617630184_noticia_normal.jpg' },
	// 	{ name: 'Dr Strange', avatar: 'https://elcomercio.pe/resizer/2PIwR_mP4Ejll4cFAhYXksIJjHY=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ML3U7AJBFFH57NWYAIB522GAAY.jpg' },
	// ]
	const [users,setUsers]=useState([]);
	const dispatch= useDispatch();
	let usersGet=useSelector(state=>state.routines.users);
	useEffect(()=>{
		const fetchUsersRoutine=async()=>{
			await getUsersRoutine(dispatch,id);
			await setUsers(usersGet);
		}
		fetchUsersRoutine();
		
	},[]);
    return (
		<div className={style.box}>
			<div className={style.section}>
				<h1>{title}</h1> 
				<AvatarGroup users={users} max={5} />
			</div>
			<hr className={style.separator} />
			<div className={style.section}>
			<Link className={style.link} to={`info/${id}`}>More Info</Link>	
			</div>
			{/* <div className={style.section}>
				<h2>Circuitos</h2>
				{days.map((circuit, index) => (
					<CircuitPill key={index} {...circuit} />
				))}
			</div>
			<hr className={style.separator} />
			<div className={style.section}>
				<h2>Dieta</h2>
				<DietPill {...diet} />
			</div> */}
		</div>
	);
}