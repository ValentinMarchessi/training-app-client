import { createSlice } from "@reduxjs/toolkit";

const rutinesSlice = createSlice({
  name: "rutines",
  initialState: {
    allRutines: [],
    rutinesById: {},
    createdRutines: {},
    updatedRutines: {},
    deletedRutines: {},
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL Rutines
    getAllRutinesStart: (state) => {
      state.isFetching = true;
    },
    getAllRutinesSuccess: (state, action) => {
      console.log(action);
      state.isFetching = false;
      state.allRutines = action.payload;
    },
    getAllRutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //GET ID Rutines
    getRutinesByIdStart: (state) => {
      state.isFetching = true;
    },
    getRutinesByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.rutinesById = action.payload;
    },
    getRutinesByIdFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    // CREATE Rutines
    createRutinesStart: (state) => {
      state.isFetching = true;
    },
    createRutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.createdRutines = action.payload;
    },
    createRutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //UPDATE Rutines
    updateRutinesStart: (state) => {
      state.isFetching = true;
    },
    updateRutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.updatedRutines = action.payload;
    },
    updateRutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    // DELETE  Rutines
    deleteRutinesStart: (state) => {
      state.isFetching = true;
    },
    deleteRutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.deletedRutines = action.payload;
    },
    deleteRutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
  },
});

export const {
  getAllRutinesStart,
  getAllRutinesSuccess,
  getAllRutinesFailure,
  getRutinesByIdStart,
  getRutinesByIdSuccess,
  getRutinesByIdFailure,
  createRutinesStart,
  createRutinesSuccess,
  createRutinesFailure,
  updateRutinesStart,
  updateRutinesSuccess,
  updateRutinesFailure,
  deleteRutinesStart,
  deleteRutinesSuccess,
  deleteRutinesFailure,
} = rutinesSlice.actions;

export default rutinesSlice.reducer;
