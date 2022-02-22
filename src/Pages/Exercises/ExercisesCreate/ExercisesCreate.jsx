import style from './ExercisesCreate.module.scss';
import ExerciseForm from '../ExerciseForm/ExerciseForm';
import { Overlay } from '../../../components';
import { useState } from 'react';

export default function ExercisesCreate() {
    const [overlay, setOverlay] = useState(false)
    const overlayStyle = {
        backgroundColor: '#201F24',
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