import {createRoutinesFailure, createRoutinesStart, createRoutinesSuccess} from '../../reducers/routinesReducer'
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //CREATE Routines
  
  export const createRoutines = async (dispatch,data) => {
    dispatch(createRoutinesStart());
    try {
      const res = await baseUrlDev.post('routine',data);
      dispatch(createRoutinesSuccess(res.data));
    } catch (err) {
      dispatch(createRoutinesFailure());
    }
  };