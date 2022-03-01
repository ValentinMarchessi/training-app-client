import { baseUrlDev } from '../../../config/requestMethod/publicRequest';
import {
  updateFailure, updateStart,
  updateSuccess
} from '../../reducers/updateUserReducer';

//UPDATE USER
export const updateUser = async (dispatch, token, userId, data) => {
  dispatch(updateStart());
  try {
    const res = await baseUrlDev.put(`user/update/${userId}`, data, {
        params: {
          userId
        },
        headers:{
          token:token
        },
    });
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailure());
  }
};
