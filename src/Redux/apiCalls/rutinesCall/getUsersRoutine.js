import {
    getAllUsersRoutinesStart,
    getAllUsersRoutinesSuccess,
    getAllUsersRoutinesFailure,
} from "../../reducers/routinesReducer";
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//getAll users routine

export const getUsersRoutine = async (dispatch,id) => {
    dispatch(getAllUsersRoutinesStart());
    try {
        const res = await baseUrlDev.get(`/transaction/users/${id}`);
        dispatch(getAllUsersRoutinesSuccess(res.data));
    } catch (err) {
        dispatch(getAllUsersRoutinesFailure());
    }
};
