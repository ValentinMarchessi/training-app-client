import {
    updateDietsStart,
    updateDietsSuccess,
    updateDietsFailure,
  } from "../../Reducers/dietsReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //UPDATE DIETS
  
  export const updateDiets = async (dispatch,id,value) => {
    dispatch(updateDietsStart());
    try {
      const res = await baseUrlDev.put(`diet/${id}`,value);
      dispatch(updateDietsSuccess(res.data));
    } catch (err) {
      dispatch(updateDietsFailure());
    }
  };
  