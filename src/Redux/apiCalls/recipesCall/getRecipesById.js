import {
    getRecipesByIdStart,
    getRecipesByIdSuccess,
    getRecipesByIdFailure,
  } from "../../Reducers/recipesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //get RECIPE By Id
  
  export const getRecipesById = async (dispatch,id) => {
    dispatch(getRecipesByIdStart());
    try {
      const res = await baseUrlDev.get(`recipe/${id}`);
      dispatch(getRecipesByIdSuccess(res.data));
    } catch (err) {
      dispatch(getRecipesByIdFailure());
    }
  };
  