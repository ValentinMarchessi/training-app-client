import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
    getAllUsersNutritionitsStart,
    getAllUsersNutritionitsSuccess,
    getAllUsersNutritionitsFailure
} from '../../reducers/allUsersNutritionist'

//getAll nutrutuinust
export const getAllNutritionits = async (dispatch) => {
    dispatch(getAllUsersNutritionitsStart());
    try {
        const res = await baseUrlDev.get('user/get/nutritionist');
        dispatch(getAllUsersNutritionitsSuccess(res.data));
        return res.data
    } catch (err) {
        dispatch(getAllUsersNutritionitsFailure());
    }
};
