import { createSlice } from "@reduxjs/toolkit";
//agrega routinesDetails
const routinesSlice = createSlice({
  name: "routines",
  initialState: {
    allRoutines: [],
    routinesById: {},
    routinesDetails: {},
    users:[],
    createdRoutines: {},
    updatedRoutines: {},
    deletedRoutines: {},
    routinesByUser: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET users Routine
    getAllUsersRoutinesStart: (state)=>{
      state.isFetching = true;
    },
    getAllUsersRoutinesSuccess: (state, action)=>{
      state.isFetching = false;
      state.error = false;
      state.routinesByUser = [...state.users,action.payload];
    },
    getAllUsersRoutinesFailure: (state)=>{
      state.isFetching = true;
      state.error = true;
    },
    // CREATE Routine
    createRoutinesStart: (state)=>{
      state.isFetching = true;
    },
    createRoutinesSuccess: (state,action)=>{
      state.isFetching = false;
      state.error = false;
      state.routinesByUser = action.payload;
    },
    createRoutinesFailure: (state)=>{
      state.isFetching = true;
      state.error = true;
    },
    // GET USER Routines
    getUserRoutinesStart: (state)=>{
      state.isFetching = true;
    },
    getUserRoutinesSuccess: (state,action)=>{
      state.isFetching = false;
      state.error = false;
      state.routinesByUser = action.payload;
    },
    getUserRoutinesFailure: (state)=>{
      state.isFetching = true;
      state.error = true;
    },
    // GET ALL Routines
    getAllRoutinesStart: (state) => {
      state.isFetching = true;
    },
    getAllRoutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
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
      state.error = false;
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
      state.error = false;
      state.routinesDetails = action.payload;
    },
    getRoutinesDetailsFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //UPDATE Routines
    updateRoutinesStart: (state) => {
      state.isFetching = true;
    },
    updateRoutinesSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
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
      state.error = false;
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
  getUserRoutinesStart,
  getUserRoutinesSuccess,
  getUserRoutinesFailure,
  getAllUsersRoutinesStart,
  getAllUsersRoutinesSuccess,
  getAllUsersRoutinesFailure,
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
