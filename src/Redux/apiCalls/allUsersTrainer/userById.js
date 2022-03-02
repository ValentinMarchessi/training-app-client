import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  getUsersByIdFailure,
  getUsersByIdStart,
  getUsersByIdSuccess,
} from "../../reducers/userByIdReducer";

//get user by ID

export const getUserById = async (dispatch, id, token) => {
  dispatch(getUsersByIdStart());
  try {
    const res = await baseUrlDev.get(`user/${id}`, { headers: { token } });
    dispatch(getUsersByIdSuccess(res.data));
  } catch (err) {
    dispatch(getUsersByIdFailure());
  }
};
