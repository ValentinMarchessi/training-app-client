import {
    getAllDietsStart,
    getAllDietsSuccess,
    getAllDietsFailure,
  } from "../../Reducers/dietsReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //GET ALL DIETS
  
  export const getAllDiets = async (dispatch) => {
    dispatch(getAllDietsStart());
    try {
      const res = await baseUrlDev.get("diet");
      dispatch(getAllDietsSuccess(res.data));
    } catch (err) {
      dispatch(getAllDietsFailure());
    }
  };
  