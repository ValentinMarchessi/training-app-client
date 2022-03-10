import { createSlice } from "@reduxjs/toolkit";

const allUsersNutritionits = createSlice({
  name: "allUsersNutritionits",
  initialState: {
    usersNutritionits: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL NUTRICIONISTS
    getAllUsersNutritionitsStart: (state) => {
      state.isFetching = true;
    },
    getAllUsersNutritionitsSuccess: (state, action) => {
      state.isFetching = false;
      state.usersNutritionits = action.payload;
    },
    getAllUsersNutritionitsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getAllUsersNutritionitsStart,
  getAllUsersNutritionitsSuccess,
  getAllUsersNutritionitsFailure,
} = allUsersNutritionits.actions;

export default allUsersNutritionits.reducer;
