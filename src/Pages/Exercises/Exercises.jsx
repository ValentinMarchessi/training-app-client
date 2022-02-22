import style from './Exercises.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import { ExercisesView, ExercisesCreate } from '.';

export default function Exercises() {



	return (
		<div className={style.page}>
			<Navbar />
			<div className={style.body}>
				<ExercisesView />
				<ExercisesCreate/>
			</div>
		</div>
	);
}
