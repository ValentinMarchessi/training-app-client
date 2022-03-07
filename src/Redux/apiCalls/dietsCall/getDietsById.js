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
      const res = await baseUrlDev.get(`diet/user/${id}`,
      {
        headers:{
            token
        }
      });
      dispatch(getDietsByIdSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(getDietsByIdFailure());
    }
  };
  