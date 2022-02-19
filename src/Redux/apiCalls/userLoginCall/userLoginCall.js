import {
    loginStart,
    loginSuccess,
    loginFailure
} from '../../reducers/userReducer'
import { publicRequest } from '../../../config/requestMethod/publicRequest'

//LOGIN USER
export const loginUser = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("user/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}