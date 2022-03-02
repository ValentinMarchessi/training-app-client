import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  getRoutinesByIdFailure, getRoutinesByIdStart,
  getRoutinesByIdSuccess
} from "../../reducers/routinesReducer.js";
  
//get routines By Id
  
export const getRoutinesById = async (dispatch, id) => {
  dispatch(getRoutinesByIdStart());
  try {
    const res = await baseUrlDev.get(`routine/get/${id.routineId}`);
    dispatch(getRoutinesByIdSuccess(res.data));
  } catch (err) {
    dispatch(getRoutinesByIdFailure());
  }
};
  