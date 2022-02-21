import style from './Routines.module.scss';
import home from '../../assets/images/home.svg';
import RoutineBox from '../../components/RoutineBox/RoutineBox';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const mockRoutine = {
	name: 'Calistenia',
	users: [
		{ name: 'Tony Stark', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
		{ name: 'Steve Rogers', avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg' },
		{ name: 'Natasha Romanoff', avatar: 'https://es.web.img3.acsta.net/r_1280_720/newsv7/21/07/06/11/37/3498224.jpg' },
		{ name: 'Thor', avatar: 'https://www.quever.news/u/fotografias/m/2020/9/12/f850x638-1140_78629_4825.jpg' },
		{ name: 'Loki', avatar: 'https://as01.epimg.net/meristation/imagenes/2021/04/05/noticias/1617630043_282201_1617630184_noticia_normal.jpg' },
		{ name: 'Dr Strange', avatar: 'https://elcomercio.pe/resizer/2PIwR_mP4Ejll4cFAhYXksIJjHY=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ML3U7AJBFFH57NWYAIB522GAAY.jpg' },
	],
	circuits: [
		{ id: 1, name: 'Abdominales Básicos', length: 5, duration: 10 },
		{ id: 2, name: 'Espalda y Biceps', length: 4, duration: 20 },
		{ id: 3, name: 'Pectorales y Tríceps', length: 4, duration: 20 },
	],
	diet: {
		name: "Cetogénica",
		energy: 2411,
		carbs: 26,
		fats: 59,
		proteins: 121,
	},
};

const mockData = [mockRoutine, mockRoutine, mockRoutine];

export default function Routines() {
	const [routines, setRoutines] = useState([]);

	useEffect(() => {
		//request a la API, por ahora esto es un mock
		setRoutines(mockData);
	},[setRoutines])

    return (
		<div className={style.page}>
			<div className={style.header}>
				<Link to='/'>
					<img id={style.icon} src={home} alt="home" />
				</Link>
				<h1>My Routines</h1>
				<hr />
			</div>
			<div className={style.body}>
				<div className={style.routines}>
					<div className={style.container}>
						{routines.map((routine, index) => (
							<RoutineBox key={index} {...routine} />
						))}
					</div>
				</div>
				<Link id={style.create} to="create">
					Create Routine
				</Link>
			</div>
		</div>
	);
}