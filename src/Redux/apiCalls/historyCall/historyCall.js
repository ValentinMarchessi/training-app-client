import { baseUrlDev } from '../../../config/requestMethod/publicRequest';
import {
  fetchFailure, fetchStart,
  fetchSuccess
} from '../../reducers/userHistoryReducer';

//GET USER HISTORY
export const getUserHistory = async (dispatch, user) => {
  dispatch(fetchStart());
  try {
    const res = await baseUrlDev.get(`transaction/history/${user.id}`,);
    dispatch(fetchSuccess(res.data));
  } catch (err) {
    dispatch(fetchFailure());
  }
};