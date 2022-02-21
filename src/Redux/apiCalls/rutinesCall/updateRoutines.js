import {
    updateRoutinesStart,
    updateRoutinesSuccess,
    updateRoutinesFailure,
  } from "../../Reducers/eoutinesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //update routines
  
  export const updateRoutines = async (dispatch,id,value) => {
    dispatch(updateRoutinesStart());
    try {
      const res = await baseUrlDev.put(`routines/${id}`,value);
      dispatch(updateRoutinesSuccess(res.data));
    } catch (err) {
      dispatch(updateRoutinesFailure());
    }
  };
  