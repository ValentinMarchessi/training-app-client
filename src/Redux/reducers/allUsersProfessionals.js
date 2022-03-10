import { createSlice } from "@reduxjs/toolkit";

const allProfessionals = createSlice({
  name: "allProfessionals",
  initialState: {
    usersProfessionals: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL PROFESSIONALS
    getAllProfessionalsStart: (state) => {
      state.isFetching = true;
    },
    getAllProfessionalsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.usersProfessionals = action.payload;
    },
    getAllProfessionalsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getAllProfessionalsStart,
  getAllProfessionalsSuccess,
  getAllProfessionalsFailure,
} = allProfessionals.actions;

export default allProfessionals.reducer;
