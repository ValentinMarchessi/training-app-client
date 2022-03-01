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
    getAllRoutinesStart: (state) => {
      state.isFetching = true;
    },
    getAllRoutinesSuccess: (state, action) => {
      console.log(action);
      state.isFetching = false;
      state.allRutines = action.payload;
    },
    getAllRoutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //GET ID Rutines
    getRoutinesByIdStart: (state) => {
      state.isFetching = true;
    },
    getRoutinesByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.rutinesById = action.payload;
    },
    getRoutinesByIdFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    // CREATE Rutines
    createRoutinesStart: (state) => {
      state.isFetching = true;
    },
    createRoutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.createdRutines = action.payload;
    },
    createRoutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //UPDATE Rutines
    updateRoutinesStart: (state) => {
      state.isFetching = true;
    },
    updateRoutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.updatedRutines = action.payload;
    },
    updateRoutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    // DELETE  Rutines
    deleteRoutinesStart: (state) => {
      state.isFetching = true;
    },
    deleteRoutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.deletedRutines = action.payload;
    },
    deleteRoutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
  },
});

export const {
  getAllRoutinesStart,
  getAllRoutinesSuccess,
  getAllRoutinesFailure,
  getRoutinesByIdStart,
  getRoutinesByIdSuccess,
  getRoutinesByIdFailure,
  createRoutinesStart,
  createRoutinesSuccess,
  createRoutinesFailure,
  updateRoutinesStart,
  updateRoutinesSuccess,
  updateRoutinesFailure,
  deleteRoutinesStart,
  deleteRoutinesSuccess,
  deleteRoutinesFailure,
} = rutinesSlice.actions;

export default rutinesSlice.reducer;
