import { createSlice } from "@reduxjs/toolkit";

const UserByIdSlice = createSlice({
  name: "UserByIdSlice",
  initialState: {
    userById: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET USER BY ID
    getUsersByIdStart: (state) => {
      state.isFetching = true;
    },
    getUsersByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.userById = action.payload;
    },
    getUsersByIdFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getUsersByIdStart, getUsersByIdSuccess, getUsersByIdFailure } =
  UserByIdSlice.actions;

export default UserByIdSlice.reducer;
