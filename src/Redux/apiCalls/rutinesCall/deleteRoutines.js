import {
    deleteRoutinesStart,
    deleteRoutinesSuccess,
    deleteRoutinesFailure,
  } from "../../Reducers/routinesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //delete Routines
  
  export const deleteRoutines = async (dispatch,id) => {
    dispatch(deleteRoutinesStart());
    try {
      const res = await baseUrlDev.delete(`routines/${id}`);
      dispatch(deleteRoutinesSuccess(res.data));
    } catch (err) {
      dispatch(deleteRoutinesFailure());
    }
  };
  