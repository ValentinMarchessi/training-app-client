import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice(
    {
        name: 'transaction',
        initialState: {
            transactions: [],
            createTransaction: {},
            isFetching: false,
            error: false
        },
        reducers: {
            //POST TRANSACTION
            postCreateTransactionStart: (state) => {
                state.isFetching = true;
            },
            postCreateTransactionSuccess: (state, action) => {
                state.isFetching = false;
                state.error = false;
                state.createTransaction = action.payload;
            },
            postCreateTransactionError: (state) => {
                state.isFetching = false;
                state.error = true;
            },
            //GET TRANSACTION
            getTransactionsStart: (state) => {
                state.isFetching = true;
            },
            getTransactionsSuccess: (state, action) => {
                state.transactions = action.payload;
                state.error = false;
                state.isFetching = false;
            },
            getTransactionsError: (state) => {
                state.isFetching = false;
                state.error = true;
            }
        }
    }
)

export const
    {
        postCreateTransactionStart,
        postCreateTransactionSuccess,
        postCreateTransactionError,
        getTransactionsStart,
        getTransactionsSuccess,
        getTransactionsError,
    } = transactionSlice.actions

export default transactionSlice.reducer