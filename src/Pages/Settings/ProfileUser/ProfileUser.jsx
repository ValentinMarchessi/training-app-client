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

	//estos campos van inicializados con datos del usuario que vienen de la store, por ahora se inicializan vacios
	const [fields, setFields] = useState({
		firstName: '',
		lastName: '',
		specialization: '',
		height: '',
		weight: '',
	});
	const [error, setError] = useState({
		firstName: '',
		lastName: '',
		specialization: '',
		height: '',
		weight: '',
	});

	function handleTextFields(event) {
		const { name, value } = event.target;

		// if (name === 'firstName') setFields({ ...fields, firstName: value });
		// if (name === 'lastName') setFields({ ...fields, lastName: value });
		// if (name === 'specialization') setFields({ ...fields, specialization: value });
		// if (name === 'height') setFields({ ...fields, height: value });

		setFields({ ...fields, [name]: value });
	}

	function handleNumberField(event) { 
		const { name, value } = event.target;
		setFields({...fields, [name]: value})
	}
	
	function handleSave() {
		
	}

	const camelCase = (string) => formatString(string, 'camelCase');

	const textFields = ['First Name', 'Last Name', 'Specialization'].map((field) => <Input key={camelCase(field)} name={camelCase(field)} label={field} onBlur={handleTextFields} error={error[camelCase(field)]} />);

	const numberInputOptions = {type: 'number', onBlur: handleNumberField, options: {min: 1, max: 300}}

	return (
		<div className={styles.container}>
			{textFields}
			<Input label="Height" name="height" key="height" inlineLabel="cm" {...numberInputOptions}/>
			<Input label="Weight" name="weight" key="weight" inlineLabel="kg" {...numberInputOptions}/>
			<button id={styles.save} onClick={handleSave}>Save</button>
		</div>
	);
}
