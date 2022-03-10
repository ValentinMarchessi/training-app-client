import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
    getAllRoutinesFailure, getAllRoutinesStart,
    getAllRoutinesSuccess
} from "../../reducers/routinesReducer";

//getAll Routines

export const getAllRoutines = async (dispatch) => {
    dispatch(getAllRoutinesStart());
    try {
        const res = await baseUrlDev.get('routine');
        dispatch(getAllRoutinesSuccess(res.data));
        return res.data
    } catch (err) {
        dispatch(getAllRoutinesFailure());
    }
};
