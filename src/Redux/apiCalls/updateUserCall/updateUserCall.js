import { baseUrlDev } from '../../../config/requestMethod/publicRequest';
import { updateFailure, updateStart, updateSuccess } from '../../reducers/userUpdateReducer';

//UPDATE USER
export const updateUser = async (dispatch, accessToken, userId, data) => {
	dispatch(updateStart());
	try {
		const res = await baseUrlDev.put(
			`update/${userId}`,
			{
				username: data.username,
				password: data.password,
				email: data.email,
				profile_img: data.profile_img,
			},
			{
				headers: { token: accessToken },
			}
		);
		dispatch(updateSuccess(res.data));
	} catch (err) {
		dispatch(updateFailure());
	}
};
