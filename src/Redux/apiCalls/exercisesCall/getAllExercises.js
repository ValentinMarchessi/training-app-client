import {
    getAllExercisesStart,
    getAllExercisesSuccess,
    getAllExercisesFailure,
  } from "../../Reducers/exercisesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //getAll EXERCISES
  
  export const getAllExercises = async (dispatch) => {
    dispatch(getAllExercisesStart());
    try {
      const res = await baseUrlDev.get("exercise");
      dispatch(getAllExercisesSuccess(res.data));
    } catch (err) {
      dispatch(getAllExercisesFailure());
    }
  };
  