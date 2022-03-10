import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  getReviewByIdFailure,
  getReviewByIdStart,
  getReviewByIdSuccess,
} from "../../reducers/reviewReducer.js";

//get review By Id

export const getReviewById = async (dispatch, id, token) => {
  dispatch(getReviewByIdStart());
  try {
    const res = await baseUrlDev.get(`review/product/${id}`, {
      headers: { token },
    });
    dispatch(getReviewByIdSuccess(res.data));
  } catch (err) {
    dispatch(getReviewByIdFailure());
  }
};
