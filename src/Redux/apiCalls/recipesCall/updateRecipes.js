import {
    updateRecipesStart,
    updateRecipesSuccess,
    updateRecipesFailure,
  } from "../../Reducers/recipesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //update RECIPE
  
  export const updateRecipes = async (dispatch,id,value) => {
    dispatch(updateRecipesStart());
    try {
      const res = await baseUrlDev.put(`recipe/${id}`,value);
      dispatch(updateRecipesSuccess(res.data));
    } catch (err) {
      dispatch(updateRecipesFailure());
    }
  };
  