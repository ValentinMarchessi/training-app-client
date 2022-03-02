import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice(
    {
        name: 'transaction',
        initialState: {
            transaction: [],
            createTransaction: {},
            isFetching: false,
            error: false
        },
        reducers: {
            //POST TRANSACTION
            postCreateTransactionStart: (state) => {
                state.isFetching = true
            },
            postCreateTransactionSuccess: (state, action) => {
                state.isFetching = false
                state.createTransaction = action.payload
            },
            postCreateTransactionError: (state) => {
                state.isFetching = false
                state.error = true
            }
        }
    }
)

export const
    {
        postCreateTransactionStart,
        postCreateTransactionSuccess,
        postCreateTransactionError
    } = transactionSlice.actions

export default transactionSlice.reducer