import style from './Routine.module.scss';
import Exercise from '../../components/Exercise/Exercise.jsx';
import * as React from 'react';

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

const exercises = [
	{
		name: 'Burpee',
		sets: 3,
		reps: 12,
		videoId: 'auBLPXO8Fww',
	},
	{
		name: 'Burpee',
		sets: 3,
		reps: 12,
		videoId: 'auBLPXO8Fww',
	},
	{
		name: 'Burpee',
		sets: 3,
		reps: 12,
		videoId: 'auBLPXO8Fww',
	},
	{
		name: 'Burpee',
		sets: 3,
		reps: 12,
		videoId: 'auBLPXO8Fww',
	},
];

export default function Routine() {
    return (
		<div className={style.page}>
			<div className={style.header}>
				<h1>Rutina</h1>
				<hr />
			</div>
			<div className={style.body}>
				<div className={style.exerciseContainer}>
					{exercises.map((exercise, index) => (
						<Exercise key={index} name={exercise.name} sets={exercise.sets} reps={exercise.reps} videoId={exercise.videoId} />
					))}
				</div>
				<button id={style.start}>Empezar</button>
			</div>
		</div>
	);
}