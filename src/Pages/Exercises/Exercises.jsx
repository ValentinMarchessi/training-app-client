import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Exercises.module.scss';
import home from '../../assets/images/home.svg';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExercises } from '../../Redux/apiCalls/exercisesCall/getAllExercises.js'
import ExerciseForm from '../../components/ExerciseForm/ExerciseForm';

const mock = [{title: 'asd', description: 'asd', video: 'https://www.youtube.com/watch?v=Uy2nUNX38xE'}]

export default function Exercises() {
    const user = useSelector((store) => store.user.currentUser);
    const exercises = useSelector((store) => store.exercises.allExercises);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllExercises(dispatch,{userId: user.userId, token: user.accessToken})
    },[dispatch, user, getAllExercises, exercises])

	return (
		<div className={style.page}>
			<div className={style.header}>
				<Link to="/">
					<img id={style.icon} src={home} alt="home" />
				</Link>
				<h1>My Exercises</h1>
				<hr />
			</div>
            <div className={style.body}>
                <div className={style.container}>
                    <CardContainer cards={exercises} CardElement={ExerciseCard} />
                </div>

                <ExerciseForm/>
			</div>
		</div>
	);
}
