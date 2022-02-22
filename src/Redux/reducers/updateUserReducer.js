import { createSlice } from "@reduxjs/toolkit";

const updateUser = createSlice({
  name: 'updateUser',
  initialState: {
    userId: null,
    field: null,
    value: null,
    isFetching: false,
    error: false
  },
  reducers: {
    updateStart: (state) => {
      state.isFetching = true;
    },
    updateSuccess: (state, action) => {
      const { uid, field, value } = action.payload;
      state.isFetching = false;
      state.userId = uid;
      state.field = field;
      state.value = value;
    },
    updateFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  },
});

export const {
  updateStart,
  updateSuccess,
  updateFailure
} = updateUser.actions;

export default updateUser.reducer;