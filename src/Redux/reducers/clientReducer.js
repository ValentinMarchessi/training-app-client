import { createSlice } from "@reduxjs/toolkit";

const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    entries: null,
    isFetching: false,
    error: false
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
} = clientsSlice.actions;

export default clientsSlice.reducer;