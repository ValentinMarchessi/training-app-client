import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  createRoutinesFailure, createRoutinesStart,
  createRoutinesSuccess
} from "../../reducers/routinesReducer.js";
  
//CREATE Routines
  
export const createRoutines = async (dispatch, data) => {
  dispatch(createRoutinesStart());
  try {
    const res = await baseUrlDev.post(`routine/${data.owner}`, data.values);
    dispatch(createRoutinesSuccess(res.data));
  } catch (err) {
    dispatch(createRoutinesFailure());
  }
};
  