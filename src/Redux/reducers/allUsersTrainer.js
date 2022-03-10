import { createSlice } from "@reduxjs/toolkit";

const allUsersTrainers = createSlice({
    name: 'allUsersTrainers',
    initialState: {
        usersTrainers: [],
        isFetching: false,
        error: false
    },
    reducers: {
        //GET ALL TRAINERS
        getAllUsersTrainersStart: (state) => {
            state.isFetching = true
        },
        getAllUsersTrainersSuccess: (state, action) => {
            state.isFetching = false
            state.error = false;
            state.usersTrainers = action.payload
        },
        getAllUsersTrainersFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
    },
})

export const {
    getAllUsersTrainersStart,
    getAllUsersTrainersSuccess,
    getAllUsersTrainersFailure,
} = allUsersTrainers.actions;

export default allUsersTrainers.reducer