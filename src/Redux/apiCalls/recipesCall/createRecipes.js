import { createRecipesStart, createRecipesSuccess, createRecipesFailure } from '../../reducers/recipesReducer';
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//CREATE RECIPES
export const postCreateRecipes = async (dispatch, userId, data) => {
    dispatch(createRecipesStart());
    try {
        const res = await baseUrlDev.post(`recipe/${userId}`, data);
        dispatch(createRecipesSuccess(res.data));
    } catch (err) {
        dispatch(createRecipesFailure());
    }
};