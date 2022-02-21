import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './ExerciseForm.module.scss';
import { createExercises } from '../../Redux/apiCalls/exercisesCall/createExercises';

export default function ExerciseForm() {
	const [form, setForm] = useState({
		name: null, //string
		reps: null, //number
		sets: null, //number
		video: null,//string
	});
	const [error, setError] = useState('');

    const dispatch = useDispatch();

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
            if (!form[field]) return setError(`${field} is required!`)
            setError('') ;
		}
		if (!error) {
            console.log(form);
            createExercises(dispatch,form);
            /*
            ACA VA EL REDUX/ENDPOINTS DE LA API
            */
		}
	}

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input name="name" type="text" onChange={handleInput} />
			<label htmlFor="reps">Reps</label>
			<input name="reps" type="number" onChange={handleInput} min={1} />
			<label htmlFor="sets">Sets</label>
			<input name="sets" type="number" onChange={handleInput} min={0} />
			<label htmlFor="video">Video</label>
			<input name="video" type="text" onChange={handleInput} />
			<button type="submit">Create</button>
            {error && <p id={style.error}>{error}</p>}
		</form>
	);
}
