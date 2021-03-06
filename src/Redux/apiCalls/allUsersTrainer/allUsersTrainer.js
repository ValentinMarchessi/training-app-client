import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import { getAllUsersTrainersFailure, getAllUsersTrainersStart, getAllUsersTrainersSuccess } from "../../reducers/allUsersTrainer";

//getAll Routines

export const getAllTrainers = async (dispatch) => {
    dispatch(getAllUsersTrainersStart());
    try {
        const res = await baseUrlDev.get('user/get/trainers');
        dispatch(getAllUsersTrainersSuccess(res.data));
        return res.data;
    } catch (err) {
        dispatch(getAllUsersTrainersFailure());
    }
};
