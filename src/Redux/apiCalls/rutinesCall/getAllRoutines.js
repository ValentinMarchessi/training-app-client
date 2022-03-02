import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
    getAllRoutinesFailure, getAllRoutinesStart,
    getAllRoutinesSuccess
} from "../../reducers/routinesReducer";

//getAll Routines

export const getAllRoutines = async (dispatch,token) => {
    dispatch(getAllRoutinesStart());
    try {
        const res = await baseUrlDev.get('routine', {headers:{token}});
        dispatch(getAllRoutinesSuccess(res.data));
    } catch (err) {
        dispatch(getAllRoutinesFailure());
    }
};
