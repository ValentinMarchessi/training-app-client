import {
    createExercisesStart,
    createExercisesSuccess,
    createExercisesFailure,
  } from "../../reducers/exercisesReducer";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //CREATE EXERCISES
  
  export const createExercises = async (dispatch,data) => {
    dispatch(createExercisesStart());
    try {
      const res = await baseUrlDev.post(`exercise/${data.userId}`, data.body, { headers: {token: data.token} });
      dispatch(createExercisesSuccess(res.data));
    } catch (err) {
      dispatch(createExercisesFailure());
    }
  };
  