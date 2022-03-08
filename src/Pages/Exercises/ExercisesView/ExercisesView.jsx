import style from '../Exercises.module.scss';
import { CardContainer } from '../../../components';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { useEffect, useState } from 'react';
import { getAllExercises } from '../../../Redux/apiCalls/exercisesCall/getAllExercises.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ExercisesView() {
	const [search, setSearch] = useState('');
	const user = useSelector((store) => store.user.currentUser);
	const dispatch = useDispatch();
	const { allExercises } = useSelector((store) => store.exercises);

	useEffect(() => {
		if (user) getAllExercises(dispatch, { userId: user.userId, token: user.accessToken });
	}, [dispatch, user, getAllExercises]);

	useEffect(() => {
		
	}, [search])
	
	function handleSearch(event) {
		const { value } = event.target;
		setSearch(value);
	}

	const cardContainerStyle = {
		marginTop: '40px',
		display: 'grid',
		gridTemplateColumns: 'auto auto auto',
		maxHeight: '500px',
	};

	const searchResults = allExercises.filter(e => e.title.startsWith(search));

	return (
		<>
			<h1 id={style.title}>Mis Ejercicios</h1>
			<div id={style.searchbar}>
				<input type="text" value={search} onChange={handleSearch}></input>
			</div>
			<CardContainer style={cardContainerStyle} cards={searchResults} CardElement={ExerciseCard} />
		</>
	);
}
