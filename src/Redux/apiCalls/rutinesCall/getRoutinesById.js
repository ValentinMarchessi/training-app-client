import {
    getRoutinesByIdStart,
    getRoutinesByIdSuccess,
    getRoutinesByIdFailure,
  } from "../../Reducers/routinesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //get routines By Id
  
  export const getRoutinesById = async (dispatch,id) => {
    dispatch(getRoutinesByIdStart());
    try {
      const res = await baseUrlDev.get(`routine/${id}`);
      dispatch(getRoutinesByIdSuccess(res.data));
    } catch (err) {
      dispatch(getRoutinesByIdFailure());
    }
  };
  