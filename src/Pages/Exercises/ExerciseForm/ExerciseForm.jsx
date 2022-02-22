import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ExerciseForm.module.scss';
import { createExercises } from '../../../Redux/apiCalls/exercisesCall/createExercises';

const testingState = {
	title: 'Burpee',
	description: 'Mix of jumping jacks and push ups, an excelent whole body exercise.',
	video: 'youtubeURL',
};

export default function ExerciseForm() {
	const [form, setForm] = useState({
		title: null, //string
		description: null, //number
		video: null, //string
	});

	useEffect(() => {
		setForm(testingState);
	}, [testingState, setForm]);

	const [error, setError] = useState('');

	const dispatch = useDispatch();
	const user = useSelector((store) => store.user.currentUser);

	function handleInput(event) {
		const { name, value } = event.target;
		setForm({
			...form,
			[name]: value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		for (const field in form) {
			if (!form[field]) return setError(`${field} is required!`);
			setError('');
		}
		if (!error) {
			console.log(form, user.userId, user.accessToken);
			createExercises(dispatch, { userId: user.userId, token: user.accessToken, body: form });
		}
	}

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<label htmlFor="title">Title</label>
			<input name="title" type="text" onChange={handleInput} />
			<label htmlFor="description">Description</label>
			<textarea name="description" onChange={handleInput}></textarea>
			<label htmlFor="video">Video</label>
			<input name="video" type="text" onChange={handleInput} />
			<button type="submit">Create</button>
			{error && <p id={style.error}>{error}</p>}
		</form>
	);
}
