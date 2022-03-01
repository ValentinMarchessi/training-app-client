import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoutines } from '../../../Redux/apiCalls/rutinesCall/createRoutines.js';

const RoutineForm = () => {
      const currentUser = useSelector(state => state.currentUser);
      const [data, setData] = useState({
            owner: currentUser?.id,
            title: '',
            price: 0,
            exercises: [] // need to fetch from state / props
      });
      const dispatch = useDispatch();

      const handleChange = (e) => {
            const property = e.target.id;
            const value = e.target.value;

            setData({ ...data, [property]: value });
      };

      const handleSubmit = (e) => {
            const error = Object.keys(data).map(key => (!data[key] || !data[key].length) && key).filter(e => e)[0];
            if (error) {
                  alert(`Error! field '${error}' can't be empty.`);
                  e.preventDefault();
            } else {
                  e.preventDefault();
                  createRoutines(dispatch, data, currentUser.accessToken);
                  alert('Routine Created');
            }
      };

      return <div>
            <form onChange={(e) => handleChange(e)}>
                  <label>Title</label>
                  <input type='text' id='title' />
                  <label>price</label>
                  <input type='number' id='price' />
                  <label>Exercises</label>
                  {/* Aqui deberia de ir una seleccion de los ejercicios creados y poder elegir la cantidad de repeticiones, las series, y el descanso entre ejercicios */}
                  <input type='submit' value='Create recipe' onClick={(e) => handleSubmit(e)} />
            </form>
      </div>;
};

export default RoutineForm;
