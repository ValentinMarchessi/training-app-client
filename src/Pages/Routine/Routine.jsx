import style from './Routine.module.scss';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard.jsx';
import * as React from 'react';
import { useSelector } from 'react-redux';

/*
    PROPS

    exercises: Exercise[] (arreglo de objeto Excersise, definido abajo)

    interface Exercise{
        name: string,
        sets: number,
        reps: number,
        video: string (URL),
    }
*/

export default function Routine({exercises}) {
    return (
		<div className={style.page}>
			<div className={style.header}>
				<h1>Rutina</h1>
				<hr />
			</div>
			<div className={style.body}>
				<div className={style.exerciseContainer}>
					{exercises && exercises.map((exercise, index) => (
						<ExerciseCard key={index} {...exercise} />
					))}
				</div>
				<button id={style.start}>Empezar</button>
			</div>
		</div>
	);
}