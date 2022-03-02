import {
    getAllRoutinesStart,
    getAllRoutinesSuccess,
    getAllRoutinesFailure,
} from "../../reducers/routinesReducer";
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//getAll Routines

export const getUserRoutines = async (dispatch,id) => {
    dispatch(getAllRoutinesStart());
    try {
        const res = await baseUrlDev.get(`routine/getUserRoutines/${id}`);
        dispatch(getAllRoutinesSuccess(res.data));
    } catch (err) {
        dispatch(getAllRoutinesFailure());
    }
};
