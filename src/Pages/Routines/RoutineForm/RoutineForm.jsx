import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises } from '../../../Redux/apiCalls/exercisesCall/getAllExercises.js';
import { createRoutines } from '../../../Redux/apiCalls/rutinesCall/createRoutines.js';
import style from './RoutineForm.module.scss';


export default function RoutineForm({ onAdd }) {

  const { userId, accessToken } = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exercises.allExercises);

  useEffect(() => {
    const data = { userId, token: accessToken };
    getAllExercises(dispatch, data);
  }, [dispatch]);

  const [data, setData] = useState({
    owner: userId,
    title: '',
    price: 0,
    exercises: [] // need to fetch from state / props
  });

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  weekDays.forEach(day => {
    if (!data.exercises[day]) {
      data.exercises[day] = [];
    }
  });

  const template = (e) => {
    return {
      title: e.title,
      description: e.description,
      video: e.video,
    };
  };

  const handleTag = (e) => {
    const day = e.target.id.split('-')[0];
    let currentTag = document.querySelector(`#${e.target.id}`);

    console.log(currentTag.classList.toggle(style.active));

    const current = {
      name: e.target.innerHTML.trim()
    };

    const isAdded = data.exercises[day].find(ex => ex.title === current.name);
    // remove if added twice
    if (isAdded) {
      let newExercises = data.exercises[day].filter(ex => ex.title !== isAdded.title);
      data.exercises[day] = newExercises;
    }
    // add
    if (!isAdded) {
      const validExercise = exercises.find(ex => (ex.title === current.name) && (ex.UserId === userId));

      if (validExercise) {
        let newExercises = data.exercises[day].concat(template(validExercise));
        data.exercises[day] = newExercises;
      }
    }

  };

  const handleChange = (e) => {
    const property = e.target?.id;
    const value = e.target?.value;
           
    setData({ ...data, [property]: value });
  };

  const handleSubmit = (e) => {
    const obj = {
      owner: userId, values: {
        ...data,
        exercises: Object.values(data.exercises).map(entry => (entry.length && entry) || null)
      }
    };
    const error = Object.keys(obj.values).map(key => (!obj.values[key] || !obj.values[key].length) && key).filter(e => e)[0];
    if (error) {
      alert(`Error! field '${error}' can't be empty.`);
      e.preventDefault();
    } else {
      e.preventDefault();
      createRoutines(dispatch, obj);
      onAdd();
      alert('Routine Created');
    }
  };

  return (
    <div className={style.formContainer} onChange={(e) => handleChange(e)}>
      <div className={style.inputContainer}>
        <label>Title</label>
        <input type='text' id='title' />
      </div>
      <div className={style.inputContainer}>
        <label>price</label>
        <input type='number' id='price' />
      </div>
      <label>Exercises:</label>
      <div className={style.exerciseContainer}>
        {weekDays.map((day, key) => (
          <div className={style.day} key={key}>
            <label>{day}</label>
            {exercises && exercises.map(exercise => (
              <div className={style.tag} id={`${day}-${exercise.id}`} onClick={handleTag} key={exercise.id} value={exercise.id}>{exercise.title}</div>
            ))}
          </div>
        ))}
      </div>
      <button type='submit' id={style.add} onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
};
