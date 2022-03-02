import {
    getDietsByIdStart,
    getDietsByIdSuccess,
    getDietsByIdFailure,
  } from "../../reducers/dietsReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //GET DIETS BY ID
  
  export const getDietsById = async (dispatch,id,token) => {
    dispatch(getDietsByIdStart());
    try {
      const res = await baseUrlDev.get(`diet/${id}`,
      {
        headers:{
            token
        }
    });
      dispatch(getDietsByIdSuccess(res.data));
    } catch (err) {
      dispatch(getDietsByIdFailure());
    }
  };
  