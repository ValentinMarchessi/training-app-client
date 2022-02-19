import {
    getExercisesByIdStart,
    getExercisesByIdSuccess,
    getExercisesByIdFailure,
  } from "../../Reducers/exercisesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //get EXERCISE by id
  
  export const getExercisesById = async (dispatch,id) => {
    dispatch(getExercisesByIdStart());
    try {
      const res = await baseUrlDev.get(`exercise/${id}`);
      dispatch(getExercisesByIdSuccess(res.data));
    } catch (err) {
      dispatch(getExercisesByIdFailure());
    }
  };
  