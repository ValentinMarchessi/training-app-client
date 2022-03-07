import style from './ExercisesCreate.module.scss';
import ExerciseForm from '../ExerciseForm/ExerciseForm';
import { Overlay } from '../../../components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExercises } from '../../../Redux/apiCalls/exercisesCall/getAllExercises';

export default function ExercisesCreate() {
	const { userId, accessToken } = useSelector(store => store.user.currentUser);
	const [overlay, setOverlay] = useState(false)
	const dispatch = useDispatch();
    const overlayStyle = {
        backgroundColor: '#201f24c3',
	};
    
    const handleOverlay = {
        open: () => setOverlay(true),
        close: () => setOverlay(false),
	}

    return (
		<>
			<Overlay active={overlay} onClose={handleOverlay.close} style={overlayStyle}>
				<ExerciseForm onAdd={handleOverlay.close} onClose={handleOverlay.close} />
			</Overlay>
			<button id={style.add} onClick={handleOverlay.open}>
				Add Exercise
			</button>
		</>
	);
}