import {
    createDietsStart,
    createDietsSuccess,
    createDietsFailure,
  } from "../../reducers/dietsReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //CREATE DIETS
  
  export const createDiets = async (dispatch,id,data,token) => {
    dispatch(createDietsStart());
    try {
      const res = await baseUrlDev.post(`diet/${id}`,data,{
        headers:{
          token
        }
      });
      dispatch(createDietsSuccess(res.data));
    } catch (err) {
      dispatch(createDietsFailure());
    }
  };
  