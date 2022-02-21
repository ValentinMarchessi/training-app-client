import { createRecipesStart, createRecipesSuccess, createRecipesFailure } from '../../reducers/recipesReducer';
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//CREATE RECIPES
export const CreateRecipes = async (dispatch,data, userId, accessToken) => {
  dispatch(createRecipesStart());
  try {
    const res = await baseUrlDev.post(`recipe/${userId}`,data,{
      headers:{
        token : accessToken
      }
    });
    dispatch(createRecipesSuccess(res.data));
  } catch (err) {
    dispatch(createRecipesFailure());
  }
};