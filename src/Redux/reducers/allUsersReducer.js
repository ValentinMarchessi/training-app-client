import { createSlice } from "@reduxjs/toolkit";

const allUsers = createSlice({
    name: 'allUsers',
    initialState: {
        userDietsRoutines: [],
        soldItems:[],
        isFetching: false,
        error: false
    },
    reducers: {
        userDietsRoutinesStart: (state) => {
            state.isFetching = true
        },
        userDietsRoutinesSuccess: (state, action) => {
            state.isFetching = false
            state.userDietsRoutines = action.payload
        },
        userDietsRoutinesFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        soldItemsStart: (state) => {
            state.isFetching = true
        },
        soldItemsSuccess: (state, action) => {
            state.isFetching = false
            state.soldItems = action.payload
        },
        soldItemsFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    },
})

export const {
    userDietsRoutinesStart,
    userDietsRoutinesSuccess,
    userDietsRoutinesFailure,
    soldItemsStart,
    soldItemsSuccess,
    soldItemsFailure
} = allUsers.actions;

export default allUsers.reducer