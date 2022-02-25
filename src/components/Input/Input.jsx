import {useEffect, useState} from 'react';
import styles from './Input.module.scss';

/*
    PROPS

    label: string
    onBlur: function,        es un evento que se dispara cuando se pierde el foco del input
    error: string,           se muestra debajo del input
    placeholder: string,     valor inicial y por defecto del input, opcional
    required: prop           notifica un error cuando el campo está vacío
    type: 'text' | 'email' | 'password' | 'number'  NO LOS PROBÉ CON OTROS TIPOS, PROBABLEMENTE SE ROMPA
*/  

export default function Input({ id, label, onBlur, error, placeholder, required, type = 'text'|'email'|'password'|'number', options, name, inlineLabel }) {
    const [state, setState] = useState({
        value: placeholder,
        error: error,
    });

    useEffect(() => {
        if (required && !state.value) setState(state => { return { ...state, error: 'This field is required.' } })
        else setState(state => { return {...state, error: error}});
	}, [required,error,state.value]);

    const labelStyle = state.value ? {
        transform: 'translateY(-1.4rem)',
        fontSize: '.8rem'
    } : null

    function handleChange(event) {
        const { value } = event.target;
        value ? setState({...state, value}) : setState({...state, value: placeholder});
    }

    return (
		<div id={id} className={styles.container}>
			<label style={labelStyle}>{label}</label>
			{inlineLabel && <span id={styles.inlineLabel}>{inlineLabel}</span>}
			<input id={styles.input} name={name} placeholder={placeholder} type={type} onBlur={onBlur} onChange={handleChange} {...options} autoComplete="off"></input>
			{state.error && <span id={styles.error}>{state.error}</span>}
		</div>
	);
}