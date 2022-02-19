import {
    createExercisesStart,
    createExercisesSuccess,
    createExercisesFailure,
  } from "../../Reducers/exercisesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //CREATE EXERCISES
  
  export const createExercises = async (dispatch,data) => {
    dispatch(createExercisesStart());
    try {
      const res = await baseUrlDev.post('exercise',data);
      dispatch(createExercisesSuccess(res.data));
    } catch (err) {
      dispatch(createExercisesFailure());
    }
  };
  