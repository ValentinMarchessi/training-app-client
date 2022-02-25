//STYLES
import styles from './ProfileUser.module.scss';
//COMPONENTS
import { NumberInput, Select, Input } from '../../../components';
import { useSelector } from 'react-redux';
import { formatString } from '../../../helpers/to_camelCase/index.ts';
import { style } from '@mui/system';
import { useState } from 'react';

export default function ProfileUser() {
	const user = useSelector((store) => store.user);
	const [error, setError] = useState({
		firstName: '',
		lastName: '',
		specialization: '',
		height: '',
		weight: '',
	})

	function handleTextFields(event) {
		const { name, value } = event.target;

		if (name === 'firstName') {
			
		}
	}

	function handleNumberField(event) {
		
	}

	const textFields = ['First Name', 'Last Name', 'Specialization'].map(field => 
		<Input
			key={formatString(field, 'camelCase')}
			name={formatString(field, 'camelCase')}
			label={field}
			onBlur={handleTextFields}
			error={error[formatString(field, 'camelCase')]}
		/>
	)
	return (
		<div className={styles.container}>
			{textFields}
			<Input
				type='number'
				label='Height'
				name='height'
				inlineLabel='cm'
				min={1}
				max={300} 
				onBlur={handleNumberField}
			/>
			<button id={styles.save}>Save</button>
		</div>
	);
}
