import {
    deleteDietsStart,
    deleteDietsSuccess,
    deleteDietsFailure
  } from "../../Reducers/dietsReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //DELETE DIETS
  
  export const deleteDiets = async (dispatch,id) => {
    dispatch(deleteDietsStart());
    try {
      const res = await baseUrlDev.delete(`diet/${id}`);
      dispatch(deleteDietsSuccess(res.data));
    } catch (err) {
      dispatch(deleteDietsFailure());
    }
  };
  