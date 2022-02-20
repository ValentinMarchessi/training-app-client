import {
    getAllRutinesStart,
    getAllRutinesSuccess,
    getAllRutinesFailure,
} from "../../reducers/routinesReducer";
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//getAll Routines

export const getAllRoutines = async (dispatch) => {
    dispatch(getAllRutinesStart());
    try {
        const res = await baseUrlDev.get('routine');
        dispatch(getAllRutinesSuccess(res.data));
    } catch (err) {
        dispatch(getAllRutinesFailure());
    }
};
