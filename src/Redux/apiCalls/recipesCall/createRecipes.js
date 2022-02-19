import {
    createRecipesStart,
    createRecipesSuccess,
    createRecipesFailure,
  } from "../../Reducers/recipesReducer.js";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //CREATE RECIPES
  
  export const createRecipes = async (dispatch,data) => {
    dispatch(createRecipesStart());
    try {
      const res = await baseUrlDev.post('recipe',data);
      dispatch(createRecipesSuccess(res.data));
    } catch (err) {
      dispatch(createRecipesFailure());
    }
  };
  