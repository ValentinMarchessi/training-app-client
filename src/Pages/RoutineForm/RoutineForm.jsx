import { useState } from 'react';
import style from './RoutineForm.module.scss';



export default function RoutineForm() {
    const [form, setForm] = useState({
        name: '',
        exercises: [],
        diet: {},
    });

    return (
        <form className={style.form}>
            <label for="name">Name</label>
            <input id="name" type="text"/>
        </form>
    )
}