import {
      getAllRecipesStart,
      getAllRecipesSuccess,
      getAllRecipesFailure,
} from "../../reducers/recipesReducer";
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//getAll RECIPES
export const getAllRecipesByUser = async (dispatch,userId, token) => {
dispatch(getAllRecipesStart());
try {
      const res = await baseUrlDev.get(`recipe/user/${userId}`,{
            headers:{
                  token
            }
      });
      dispatch(getAllRecipesSuccess(res.data));
} catch (err) {
      dispatch(getAllRecipesFailure());
}
};
