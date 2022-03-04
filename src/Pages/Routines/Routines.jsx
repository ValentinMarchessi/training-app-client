import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRoutines } from '../../Redux/apiCalls/rutinesCall/getUserRoutines';
import { Navbar } from '../../components';
import RoutineBox from './RoutineBox/RoutineBox';
import RoutineForm from './RoutineForm/RoutineForm';
import style from './Routines.module.scss';

// const mockRoutine = {
// 	name: 'Calistenia',
// 	id: 'abbfa1cd-52b9-4bb6-b687-cd7c34523e9b',
// 	users: [
// 		{ name: 'Tony Stark', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
// 		{ name: 'Steve Rogers', avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg' },
// 		{ name: 'Natasha Romanoff', avatar: 'https://es.web.img3.acsta.net/r_1280_720/newsv7/21/07/06/11/37/3498224.jpg' },
// 		{ name: 'Thor', avatar: 'https://www.quever.news/u/fotografias/m/2020/9/12/f850x638-1140_78629_4825.jpg' },
// 		{ name: 'Loki', avatar: 'https://as01.epimg.net/meristation/imagenes/2021/04/05/noticias/1617630043_282201_1617630184_noticia_normal.jpg' },
// 		{ name: 'Dr Strange', avatar: 'https://elcomercio.pe/resizer/2PIwR_mP4Ejll4cFAhYXksIJjHY=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ML3U7AJBFFH57NWYAIB522GAAY.jpg' },
// 	],
// 	circuits: [
// 		{ id: 1, name: 'Abdominales Básicos', length: 5, duration: 10 },
// 		{ id: 2, name: 'Espalda y Biceps', length: 4, duration: 20 },
// 		{ id: 3, name: 'Pectorales y Tríceps', length: 4, duration: 20 },
// 	],
// 	diet: {
// 		name: "Cetogénica",
// 		energy: 2411,
// 		carbs: 26,
// 		fats: 59,
// 		proteins: 121,
// 	},
// };

// const mockData = [mockRoutine, mockRoutine, mockRoutine];

export default function Routines() {
	const [routines, setRoutines] = useState([]);
	//const user=useSelector(state=>state.user.currentUser);
	const routinesFetch=useSelector(state=>state.routines.routinesByUser);
	const dispatch=useDispatch();
	useEffect(() => {
		const fetchRoutines = async () => {
			//Arreglar ruta del back para que traiga a todos los usuarios del producto
			//await getUserRoutines(dispatch,user.userId,user.accessToken);
			await setRoutines(routinesFetch);
		}
		fetchRoutines();
		console.log(routines);
	},[])
	

	const toggleForm = () => {
		let form = document.querySelector('#routineForm');
		form.classList.toggle(`${style.formOpen}`);
		form.classList.toggle(`${style.formClose}`);
	};

	return (
		<div className={style.page}>
			<Navbar />
			<div className={style.body}>
				<div className={style.routines}>
					<div className={style.container}>
						{routines.map((routine, index) => (
							<div key={index} className={style.click}>
							<RoutineBox {...routine} />		
							</div>
						))}
					</div>
				</div>
				<button className={style.create} onClick={toggleForm}>Create Routine</button>
				<div className={style.formClose} id='routineForm'>
					<RoutineForm />
				</div>
			</div>
		</div>
	);
}