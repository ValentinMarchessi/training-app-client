import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  getAllProfessionalsStart,
  getAllProfessionalsSuccess,
  getAllProfessionalsFailure,
} from "../../reducers/allUsersProfessionals";

//getAll nutrutuinust
export const getAllProfessionals = async (dispatch) => {
  dispatch(getAllProfessionalsStart());
  try {
    const res = await baseUrlDev.get("user/get/professionals");
    dispatch(getAllProfessionalsSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(getAllProfessionalsFailure());
  }
};
