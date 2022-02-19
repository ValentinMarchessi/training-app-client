import {
    getDietsByIdStart,
    getDietsByIdSuccess,
    getDietsByIdFailure,
  } from "../../Reducers/dietsReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //GET DIETS BY ID
  
  export const getDietsById = async (dispatch,id) => {
    dispatch(getDietsByIdStart());
    try {
      const res = await baseUrlDev.get(`diet/${id}`);
      dispatch(getDietsByIdSuccess(res.data));
    } catch (err) {
      dispatch(getDietsByIdFailure());
    }
  };
  