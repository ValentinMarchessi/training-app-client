import {
    getRutinesByIdStart,
    getRutinesByIdSuccess,
    getRutinesByIdFailure,
  } from "../../reducers/routinesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //get routines By Id
  
  export const getRoutinesById = async (dispatch,id) => {
    dispatch(getRutinesByIdStart());
    try {
      const res = await baseUrlDev.get(`routine/get/${id.routineId}`);
      dispatch(getRutinesByIdSuccess(res.data));
    } catch (err) {
      dispatch(getRutinesByIdFailure());
    }
  };
  