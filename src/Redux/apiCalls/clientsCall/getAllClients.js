import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import { fetchFailure, fetchStart, fetchSuccess } from "../../reducers/clientReducer";


export const getAllClients = async (dispatch, data) => {
  dispatch(fetchStart());
  try {
    const res = await baseUrlDev.get(`transaction/clients/${data.userId}`);
    dispatch(fetchSuccess(res.data));
  } catch (err) {
    dispatch(fetchFailure());
  }
};
