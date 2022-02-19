import {
    createDietsStart,
    createDietsSuccess,
    createDietsFailure,
  } from "../../Reducers/dietsReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //CREATE DIETS
  
  export const createDiets = async (dispatch,data) => {
    dispatch(createDietsStart());
    try {
      const res = await baseUrlDev.post('diet',data);
      dispatch(createDietsSuccess(res.data));
    } catch (err) {
      dispatch(createDietsFailure());
    }
  };
  