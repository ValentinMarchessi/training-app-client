import {
    registerStart,
    registerSuccess,
    registerFailure,
  } from "../../reducers/registerReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //CREATE REGISTER
  
  export const register = async (dispatch,data) => {
    dispatch(registerStart());
    try {
      const res = await baseUrlDev.post('register',data);
      dispatch(registerSuccess(res.data));
    } catch (err) {
      dispatch(registerFailure());
    }
  };
  