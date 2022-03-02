import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  getExercisesByIdFailure, getExercisesByIdStart,
  getExercisesByIdSuccess
} from "../../reducers/exercisesReducer.js";
  
//get EXERCISE by id
  
export const getExercisesById = async (dispatch, data) => {
  dispatch(getExercisesByIdStart());
  try {
    const res = await baseUrlDev.get(`exercise/${data.id}`, {
      headers:
      {
        token: data.token
      }
    });
    dispatch(getExercisesByIdSuccess(res.data));
  } catch (err) {
    dispatch(getExercisesByIdFailure());
  }
};
  