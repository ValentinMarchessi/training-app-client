import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
    getRoutinesByIdFailure, getRoutinesByIdStart,
    getRoutinesByIdSuccess
} from "../../reducers/routinesReducer.js";

//get routines By Id

export const getRoutinesById = async (dispatch, id, token) => {
    dispatch(getRoutinesByIdStart());
    try {
        const res = await baseUrlDev.get(`/routine/get/${id}`, {
            headers: {
                token
            }
        });
        dispatch(getRoutinesByIdSuccess(res.data));
    } catch (err) {
        dispatch(getRoutinesByIdFailure());
    }
};
