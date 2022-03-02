import { createSlice } from "@reduxjs/toolkit";

const routinesSlice = createSlice({
  name: "routines",
  initialState: {
    allRoutines: [],
    routinesById: {},
    createdRoutines: {},
    updatedRoutines: {},
    deletedRoutines: {},
    isFetching: false,
    error: false,
    users:[],
  },
  reducers: {
    // GET ALL Routines
    getAllRoutinesStart: (state) => {
      state.isFetching = true;
    },
    getAllRutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.allRoutines = action.payload;
    },
    getAllRoutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    //GET users routine
    getAllUsersRutinesStart: (state) => {
      state.isFetching = true;
    },
    getAllUsersRutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getAllUsersRutinesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    //GET ID Rutines
    getRutinesByIdStart: (state) => {
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
  getAllUsersRoutinesStart,
  getAllUsersRoutinesSuccess,
  getAllUsersRoutinesFailure,
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
} = routinesSlice.actions;

export default routinesSlice.reducer;
