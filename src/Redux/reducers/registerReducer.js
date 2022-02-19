import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        currentRegister: null,
        isFetching: false,
        error: false
    },
    reducers: {
        registerStart: (state) => {
            state.isFetching = true
        },
        registerSuccess: (state, action) => {
            state.isFetching = false
            state.currentRegister = action.payload
        },
        registerFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    },
})

export const {
    registerStart,
    registerSuccess,
    registerFailure
} = registerSlice.actions;

export default registerSlice.reducer