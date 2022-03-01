import {
    getAllRecipesByUserIdStart,
    getAllRecipesByUserIdSuccess,
    getAllRecipesByUserIdFailure,
} from "../../reducers/recipesReducer";
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//getAll RECIPES
export const getAllRecipesByUserId = async (dispatch, userId, token) => {
    dispatch(getAllRecipesByUserIdStart());
    try {
        const res = await baseUrlDev.get(`recipe/user/${userId}`, {
            headers: {
                token
            }
        });
        dispatch(getAllRecipesByUserIdSuccess(res.data));
    } catch (err) {
        dispatch(getAllRecipesByUserIdFailure());
    }
};
