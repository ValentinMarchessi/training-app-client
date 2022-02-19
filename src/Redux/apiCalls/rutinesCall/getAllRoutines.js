import {
    getAllRoutinesStart,
    getAllRoutinesSuccess,
    getAllRoutinesFailure,
  } from "../../Reducers/routinesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //getAll Routines
  
  export const getAllRoutines = async (dispatch) => {
    dispatch(getAllRoutinesStart());
    try {
      const res = await baseUrlDev.get('routine');
      dispatch(getAllRoutinesSuccess(res.data));
    } catch (err) {
      dispatch(getAllRoutinesFailure());
    }
  };
  