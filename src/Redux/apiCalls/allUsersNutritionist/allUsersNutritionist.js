import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
    getAllUsersNutritionitsStart,
    getAllUsersNutritionitsSuccess,
    getAllUsersNutritionitsFailure
} from '../../reducers/allUsersNutritionist'

//getAll nutrutuinust
export const getAllNutritionits = async (dispatch, token) => {
    dispatch(getAllUsersNutritionitsStart());
    try {
        const res = await baseUrlDev.get('user/nutritionists', {headers:{token}});
        dispatch(getAllUsersNutritionitsSuccess(res.data));
    } catch (err) {
        dispatch(getAllUsersNutritionitsFailure());
    }
};
