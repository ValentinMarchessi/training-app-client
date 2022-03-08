import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../components';
import { getUserRoutines } from '../../Redux/apiCalls/rutinesCall/getUserRoutines';
import RoutineBox from './RoutineBox/RoutineBox';
import RoutineCreate from './RoutineCreate/RoutineCreate';
import style from './Routines.module.scss';

export default function Routines() {
	const [routines, setRoutines] = useState([]);
	/*Falta arreglar la ruta para que traiga a todos los
	usuarios del producto desde el backend, para así mostrarlos*/
	const user = useSelector(state => state.user.currentUser);
	const routinesFetch = useSelector(state => state.routines.routinesByUser);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchRoutines = async () => {
			await getUserRoutines(dispatch, user.userId, user.accessToken);
			setRoutines(routinesFetch);
		};
		fetchRoutines();
	}, []);
	
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
				<RoutineCreate />
			</div>
		</div>
	);
}