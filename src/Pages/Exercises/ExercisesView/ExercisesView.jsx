import style from '../Exercises.module.scss';
import { CardContainer } from '../../../components';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { useEffect, useState } from 'react';
import { getAllExercises } from '../../../Redux/apiCalls/exercisesCall/getAllExercises.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const mock = [
	{ title: 'asd', description: 'asd', video: 'https://www.youtube.com/watch?v=Uy2nUNX38xE' },
	{ title: 'prueba', description: 'asd', video: 'https://www.youtube.com/watch?v=Uy2nUNX38xE' },
	{ title: 'del', description: 'asd', video: 'https://www.youtube.com/watch?v=Uy2nUNX38xE' },
	{ title: 'search', description: 'asd', video: 'https://www.youtube.com/watch?v=Uy2nUNX38xE' },
	{ title: 'asd', description: 'asd', video: 'https://www.youtube.com/watch?v=Uy2nUNX38xE' },
	{ title: 'asfg', description: 'asd', video: 'https://www.youtube.com/watch?v=Uy2nUNX38xE' },
];


export default function ExercisesView() {
	const [search, setSearch] = useState('');
	const user = useSelector((store) => store.user.currentUser);
	const dispatch = useDispatch();
	const exercises = useSelector((store) => store.exercises.allExercises);

	useEffect(() => {
		if (user) getAllExercises(dispatch, { userId: user.userId, token: user.accessToken });
	}, [dispatch, user, getAllExercises]);

	useEffect(() => {
		
	}, [search])
	
	function handleSearch(event) {
		const { value } = event.target;
		setSearch(value);
	}

	const cards = exercises.filter(e => e.title.startsWith(search))

	return (
		<>
			<h1 id={style.title}>Mis Ejercicios</h1>
			<div id={style.searchbar}>
				<input type="text" value={search} onChange={handleSearch}></input>
			</div>
			<CardContainer cards={cards} CardElement={ExerciseCard} />
		</>
	);
}
