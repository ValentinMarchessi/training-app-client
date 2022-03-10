import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { getUserRoutines } from "../../Redux/apiCalls/rutinesCall/getUserRoutines";
import RoutineBox from "./RoutineBox/RoutineBox";
import RoutineCreate from "./RoutineCreate/RoutineCreate";
import style from "./Routines.module.scss";

export default function Routines() {
	/*Falta arreglar la ruta para que traiga a todos los
	usuarios del producto desde el backend, para así mostrarlos*/
	const user = useSelector(state => state.user.currentUser);
	const routines = useSelector(state => state.routines.routinesByUser);
	const dispatch = useDispatch();

	useEffect(() => {
		getUserRoutines(dispatch, user.userId, user.accessToken);
	}, []);

	if (!routines.length) {
		return (
			<>
				<Navbar />
				<div className={style.nocontent}>
					You haven't {user.PTrainer ? 'created' : 'bought'} any routines yet.
				</div>
				<div className={style.emptyContainer}>
					{(user.PTrainer && <>
						<RoutineCreate />
						<Link to='/exercises' >
							<button className={style.create} >Create Exercise</button>
						</Link>
					</>) || ''}
				</div>
			</>
		);
	}

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
				{(user.PTrainer && <>
					<RoutineCreate />
					<Link to='/exercises' >
						<button className={style.create} >Create Exercise</button>
					</Link>
				</>) || ''}
			</div>
		</div>
	);
};
