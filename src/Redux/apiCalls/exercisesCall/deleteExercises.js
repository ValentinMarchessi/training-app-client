import {
    deleteExercisesStart,
    deleteExercisesSuccess,
    deleteExercisesFailure,
  } from "../../Reducers/exercisesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //delete EXERCISES
  
  export const deleteExercises = async (dispatch,id) => {
    dispatch(deleteExercisesStart());
    try {
      const res = await baseUrlDev.delete(`exercise/${id}`);
      dispatch(deleteExercisesSuccess(res.data));
    } catch (err) {
      dispatch(deleteExercisesFailure());
    }
  };
  