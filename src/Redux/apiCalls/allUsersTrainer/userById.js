import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  getUsersByIdFailure,
  getUsersByIdStart,
  getUsersByIdSuccess,
} from "../../reducers/userByIdReducer";

//get user by ID

export const getUserById = async (dispatch, id) => {
  dispatch(getUsersByIdStart());
  try {
    const res = await baseUrlDev.get(`user/${id}`);
    dispatch(getUsersByIdSuccess(res.data));
  } catch (err) {
    dispatch(getUsersByIdFailure());
  }
};
