import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  getDietDetailsStart,
  getDietDetailsSuccess,
  getDietDetailsFailure,
} from "../../reducers/dietsReducer";

//get diets By Id

export const getDietDetails = async (dispatch, id, token) => {
  dispatch(getDietDetailsStart());
  try {
    const res = await baseUrlDev.get(`diet/info/${id}`, {headers: {token}});
    dispatch(getDietDetailsSuccess(res.data));
  } catch (err) {
    dispatch(getDietDetailsFailure());
  }
};
