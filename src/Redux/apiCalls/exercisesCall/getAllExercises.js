import {
    getAllExercisesStart,
    getAllExercisesSuccess,
    getAllExercisesFailure,
} from "../../reducers/exercisesReducer";
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//getAll EXERCISES

export const getAllExercises = async (dispatch, data) => {
    dispatch(getAllExercisesStart());
    try {
        const res = await baseUrlDev.get(`exercise/user/${data.userId}`,
            {
                headers:
                {
                    token: data.token
                }
            });
        dispatch(getAllExercisesSuccess(res.data));
    } catch (err) {
        dispatch(getAllExercisesFailure());
    }
};
