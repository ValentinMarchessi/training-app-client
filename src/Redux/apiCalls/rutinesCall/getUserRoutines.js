import {
    getAllRutinesStart,
    getAllRutinesSuccess,
    getAllRutinesFailure,
    getRutinesByIdStart,
} from "../../reducers/routinesReducer";
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//getAll Routines

export const getUserRoutines = async (dispatch,id) => {
    dispatch(getAllRutinesStart());
    try {
        const res = await baseUrlDev.get(`routine/getUserRoutines/${id}`);
        dispatch(getAllRutinesSuccess(res.data));
    } catch (err) {
        dispatch(getAllRutinesFailure());
    }
};
