import {
    updateRecipesStart,
    updateRecipesSuccess,
    updateRecipesFailure,
  } from "../../reducers/recipesReducer";
  import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
  
  //update RECIPE
  
  export const updateRecipes = async (dispatch,recipeId, userId, value, token) => {
    dispatch(updateRecipesStart());
    try {
      const res = await baseUrlDev.put(`recipe/${recipeId}/${userId}`,value,{
        headers:{
          token
        }
      });

      dispatch(updateRecipesSuccess(res.data));
    } catch (err) {
      dispatch(updateRecipesFailure());
    }
  };
  