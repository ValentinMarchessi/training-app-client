import {
    getAllRecipesStart,
    getAllRecipesSuccess,
    getAllRecipesFailure,
  } from "../../Reducers/recipesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //getAll RECIPES
  
  export const getAllRecipes = async (dispatch) => {
    dispatch(getAllRecipesStart());
    try {
      const res = await baseUrlDev.get('recipe');
      dispatch(getAllRecipesSuccess(res.data));
    } catch (err) {
      dispatch(getAllRecipesFailure());
    }
  };
  