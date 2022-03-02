import { createSlice } from "@reduxjs/toolkit";
//agrega routinesDetails
const routinesSlice = createSlice({
  name: "routines",
  initialState: {
    allRoutines: [],
    routinesById: {},
    routinesDetails: {},
    createdRoutines: {},
    updatedRoutines: {},
    deletedRoutines: {},
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL Routines
    getAllRoutinesStart: (state) => {
      state.isFetching = true;
    },
    getAllRoutinesSuccess: (state, action) => {
      console.log(action);
      state.isFetching = false;
      state.allRoutines = action.payload;
    },
    getAllRoutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    allRoutines: [],

    //GET ID Routines
    getRoutinesByIdStart: (state) => {
      state.isFetching = true;
    },
    getRoutinesByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.routinesById = action.payload;
    },
    getRoutinesByIdFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    //GET Details ID Routines
    getRoutinesDetailsStart: (state) => {
      state.isFetching = true;
    },
    getRoutinesDetailsSuccess: (state, action) => {
      state.isFetching = false;
      state.routinesDetails = action.payload;
    },
    getRoutinesDetailsFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    // CREATE Routines
    createRoutinesStart: (state) => {
      state.isFetching = true;
    },
    createRoutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.createdRoutines = action.payload;
    },
    createRoutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //UPDATE Routines
    updateRoutinesStart: (state) => {
      state.isFetching = true;
    },
    updateRoutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.updatedRoutines = action.payload;
    },
    updateRoutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    // DELETE  Routines
    deleteRoutinesStart: (state) => {
      state.isFetching = true;
    },
    deleteRoutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.deletedRoutines = action.payload;
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
  getRoutinesDetailsStart,
  getRoutinesDetailsSuccess,
  getRoutinesDetailsFailure,
  createRoutinesStart,
  createRoutinesSuccess,
  createRoutinesFailure,
  updateRoutinesStart,
  updateRoutinesSuccess,
  updateRoutinesFailure,
  deleteRoutinesStart,
  deleteRoutinesSuccess,
  deleteRoutinesFailure,
} = routinesSlice.actions;

export default routinesSlice.reducer;
