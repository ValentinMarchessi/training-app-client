import {
    getUserRoutinesStart,
    getUserRoutinesSuccess,
    getUserRoutinesFailure,
} from "../../reducers/routinesReducer";
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//getAll Routines

export const getUserRoutines = async (dispatch,id,token) => {
    dispatch(getUserRoutinesStart());
    try {
        const res = await baseUrlDev.get(`routine/user/${id}`, {headers: {token}});
        dispatch(getUserRoutinesSuccess(res.data));
    } catch (err) {
        dispatch(getUserRoutinesFailure());
    }
};
