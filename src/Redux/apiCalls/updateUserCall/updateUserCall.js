import { baseUrlDev } from '../../../config/requestMethod/publicRequest';
import {
  updateFailure, updateStart,
  updateSuccess
} from '../../reducers/userUpdateReducer';

//UPDATE USER
export const updateUser = async (dispatch, data) => {
  dispatch(updateStart());
  try {
    const res = await baseUrlDev.put("user/update", {
      params: {
        userId: data.userId
      },
      data: {
        field: data.field,
        value: data.value
      }
    });
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailure());
  }
};