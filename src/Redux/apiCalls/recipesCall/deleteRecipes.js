import {
    deleteRecipesStart,
    deleteRecipesSuccess,
    deleteRecipesFailure,
  } from "../../Reducers/recipesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //delete RECIPES
  
  export const deleteRecipes = async (dispatch,id) => {
    dispatch(deleteRecipesStart());
    try {
      const res = await baseUrlDev.delete(`recipe/${id}`);
      dispatch(deleteRecipesSuccess(res.data));
    } catch (err) {
      dispatch(deleteRecipesFailure());
    }
  };
  