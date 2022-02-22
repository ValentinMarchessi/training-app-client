import style from './ExercisesView.module.scss';
import { CardContainer } from '../../../components'
import ExerciseCard from '../ExerciseCard/ExerciseCard';

export default function ExercisesView() {
    return (
		<>
			<h1>Mis Ejercicios</h1>
			<CardContainer cards={[]} CardElement={ExerciseCard} />
		</>
	);
}
