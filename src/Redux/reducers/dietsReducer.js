import { createSlice } from "@reduxjs/toolkit";

const dietsSlice = createSlice({
  name: "diets",
  initialState: {
    allDiets: [],
    dietsById: [],
    dietDetails: {},
    createdDiets: {},
    updatedDiets: {},
    deletedDiets: {},
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL DIETS
    getAllDietsStart: (state) => {
      state.isFetching = true;
    },
    getAllDietsSuccess: (state, action) => {
      console.log(action);
      state.isFetching = false;
      state.error = false;
      state.allDiets = action.payload;
    },
    getAllDietsFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //GET ID DIET
    getDietsByIdStart: (state) => {
      state.isFetching = true;
    },
    getDietsByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.dietsById = action.payload;
    },
    getDietsByIdFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    //GET Details ID Diets
    getDietDetailsStart: (state) => {
      state.isFetching = true;
    },
    getDietDetailsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.dietDetails = action.payload;
    },
    getDietDetailsFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    // CREATE Diets
    createDietsStart: (state) => {
      state.isFetching = true;
    },
    createDietsSuccess: (state, action) => {
      state.isFetching = false;
      state.createdDiets = action.payload;
    },
    createDietsFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //UPDATE Diets
    updateDietsStart: (state) => {
      state.isFetching = true;
    },
    updateDietsSuccess: (state, action) => {
      state.isFetching = false;
      state.updatedDiets = action.payload;
    },
    updateDietsFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    // DELETE  Diets
    deleteDietsStart: (state) => {
      state.isFetching = true;
    },
    deleteDietsSuccess: (state, action) => {
      state.isFetching = false;
      state.deletedDiets = action.payload;
    },
    deleteDietsFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
  },
});

export const {
  getAllDietsStart,
  getAllDietsSuccess,
  getAllDietsFailure,
  getDietsByIdStart,
  getDietsByIdSuccess,
  getDietsByIdFailure,
  getDietDetailsStart,
  getDietDetailsSuccess,
  getDietDetailsFailure,
  createDietsStart,
  createDietsSuccess,
  createDietsFailure,
  updateDietsStart,
  updateDietsSuccess,
  updateDietsFailure,
  deleteDietsStart,
  deleteDietsSuccess,
  deleteDietsFailure,
} = dietsSlice.actions;

export default dietsSlice.reducer;
