import {
postCreateTransactionStart,
postCreateTransactionSuccess,
postCreateTransactionError
} from '../../reducers/transactionReducer'

import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//CREATE RECIPES
export const postCreateTransaction = async (dispatch, productId, userId, data, token) => {
    dispatch(postCreateTransactionStart());
    try {
        const res = await baseUrlDev.post(`transaction/${productId}/${userId}`, data, {
            headers: {
                token
            }
        });
        dispatch(postCreateTransactionSuccess(res.data));
    } catch (err) {
        dispatch(postCreateTransactionError());
    }
};