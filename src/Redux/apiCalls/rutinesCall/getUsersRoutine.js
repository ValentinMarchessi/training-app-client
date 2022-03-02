import {
    getAllUsersRutinesStart,
    getAllUsersRutinesSuccess,
    getAllUsersRutinesFailure,
} from "../../reducers/routinesReducer";
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//getAll users routine

export const getUsersRoutine = async (dispatch,id) => {
    dispatch(getAllUsersRutinesStart());
    try {
        const res = await baseUrlDev.get(`/transaction/users/${id}`);
        dispatch(getAllUsersRutinesSuccess(res.data));
    } catch (err) {
        dispatch(getAllUsersRutinesFailure());
    }
};
