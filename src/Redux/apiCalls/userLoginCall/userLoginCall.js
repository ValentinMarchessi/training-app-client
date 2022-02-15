import {
    loginStart,
    loginSuccess,
    loginFailure
} from '../../Reducers/userReducer'
import { baseUrlDev } from '../../../config/requestMethod'

//LOGIN USER
export const loginUser = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await baseUrlDev.post("auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}