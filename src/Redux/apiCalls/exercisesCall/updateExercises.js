import {
    updateExercisesStart,
    updateExercisesSuccess,
    updateExercisesFailure,
  } from "../../Reducers/exercisesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //update EXERCISE 
  
  export const updateExercises = async (dispatch,id,value) => {
    dispatch(updateExercisesStart());
    try {
      const res = await baseUrlDev.put(`exercise/${id}`,value);
      dispatch(updateExercisesSuccess(res.data));
    } catch (err) {
      dispatch(updateExercisesFailure());
    }
  };
  