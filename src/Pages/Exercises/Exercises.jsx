import style from './Exercises.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import { ExercisesView, ExercisesCreate } from '.';
import { Link } from 'react-router-dom';

export default function Exercises() {
	return (
		<div className={style.page}>
			<Navbar />
			<Link to='/routines'>
			<button className={style.create}>Go to Routines</button>
			</Link>
			<div className={style.body}>
				<ExercisesView />
				<ExercisesCreate/>
			</div>
		</div>
	);
}
