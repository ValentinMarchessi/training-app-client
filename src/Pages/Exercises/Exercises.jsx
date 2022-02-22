import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './Exercises.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExercises } from '../../Redux/apiCalls/exercisesCall/getAllExercises.js'
import Navbar from '../../components/Navbar/Navbar';

const mock = [{title: 'asd', description: 'asd', video: 'https://www.youtube.com/watch?v=Uy2nUNX38xE'}]

export default function Exercises() {
    const user = useSelector((store) => store.user.currentUser);
    const exercises = useSelector((store) => store.exercises.allExercises);
    const dispatch = useDispatch();

	useEffect(() => {
        if(user) getAllExercises(dispatch,{userId: user.userId, token: user.accessToken})
    },[dispatch, user, getAllExercises])

	return (
		<div className={style.page}>
			<Navbar />
			<div className={style.body}>
				<Outlet/>
			</div>
		</div>
	);
}
