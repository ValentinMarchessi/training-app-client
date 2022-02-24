import {
    deleteRecipesStart,
    deleteRecipesSuccess,
    deleteRecipesFailure,
  } from "../../reducers/recipesReducer";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //delete RECIPES
  
  export const deleteRecipes = async (dispatch, userId, recipeId, token) => {
    dispatch(deleteRecipesStart());
    try {

      const res = await baseUrlDev.delete(`recipe/${userId}/${recipeId}`,{
        headers:{
          token: token
        }
      });

      dispatch(deleteRecipesSuccess(res.data));
    } catch (err) {
      dispatch(deleteRecipesFailure());
    }
  };
  