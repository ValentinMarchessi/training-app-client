import { createSlice } from "@reduxjs/toolkit";

const userHistory = createSlice({
  name: 'userHistory',
  initialState: {
    entries: []
  },
  reducers: {
    fetchStart: (state) => {
      state.isFetching = true;
    },
    fetchSuccess: (state, action) => {
      state.isFetching = false;
      state.entries = action.payload;
    },
    fetchFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFailure
} = userHistory.actions;

export default userHistory.reducer;