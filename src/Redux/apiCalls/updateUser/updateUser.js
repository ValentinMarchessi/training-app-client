import {
    loginStart,
    loginSuccess,
    loginFailure
} from '../../reducers/userLoginReducer'
import { baseUrlDev } from '../../../config/requestMethod/publicRequest'

//LOGIN USER
export const loginUser = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await baseUrlDev.post("user/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}