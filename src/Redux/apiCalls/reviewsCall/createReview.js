import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  createReviewFailure,
  createReviewStart,
  createReviewSuccess,
} from "../../reducers/reviewReducer.js";

//CREATE Review

export const createReview = async (dispatch, data, token) => {
  dispatch(createReviewStart());
  try {
    const res = await baseUrlDev.post("review", data, { headers: { token } });
    dispatch(createReviewSuccess(res.data));
  } catch (err) {
    dispatch(createReviewFailure());
  }
};
