import {
    getTransactionsStart,
    getTransactionsSuccess,
    getTransactionsError,
} from '../../reducers/transactionReducer';

import { baseUrlDev } from '../../../config/requestMethod/publicRequest';

export const getTransactions = async (dispatch, userId) => {
    dispatch(getTransactionsStart());
    try {
        const res = await baseUrlDev.get(`transaction/history/${userId}`);
        dispatch(getTransactionsSuccess(res.data));
    }
    catch (error) {
        dispatch(getTransactionsError());
    }
}