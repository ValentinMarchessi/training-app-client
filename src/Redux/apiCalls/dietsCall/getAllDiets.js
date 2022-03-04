import {
    getAllDietsStart,
    getAllDietsSuccess,
    getAllDietsFailure,
  } from "../../reducers/dietsReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //GET ALL DIETS
  
  export const getAllDiets = async (dispatch,token) => {
    dispatch(getAllDietsStart());
    try {
      const res = await baseUrlDev.get("diet",{
        headers:{
          token
        }
      });
      dispatch(getAllDietsSuccess(res.data));
    } catch (err) {
      dispatch(getAllDietsFailure());
    }
  };