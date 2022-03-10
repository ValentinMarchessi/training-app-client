import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  getDietDetailsStart,
  getDietDetailsSuccess,
  getDietDetailsFailure,
} from "../../reducers/dietsReducer";

//get diets By Id

export const getDietDetails = async (dispatch, id) => {
  dispatch(getDietDetailsStart());
  try {
    const res = await baseUrlDev.get(`diet/details/${id}`);
    dispatch(getDietDetailsSuccess(res.data));
  } catch (err) {
    dispatch(getDietDetailsFailure());
  }
};
