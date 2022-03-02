import { createSlice } from "@reduxjs/toolkit";

const excercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    allExercises: [],
    exercisesById: {},
    createdExercises: {},
    updatedExercises: {},
    deletedExercises: {},
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL EXERCISES
    getAllExercisesStart: (state) => {
      state.isFetching = true;
    },
    getAllExercisesSuccess: (state, action) => {
      console.log(action);
      state.isFetching = false;
      state.allExercises = action.payload;
    },
    getAllExercisesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //GET ID EXERCISES
    getExercisesByIdStart: (state) => {
      state.isFetching = true;
    },
    getExercisesByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.exercisesById = action.payload;
    },
    getExercisesByIdFailure: (state) => {
      state.exercisesById = undefined;
      state.isFetching = true;
      state.error = true;
    },

    // CREATE EXERCISES
    createExercisesStart: (state) => {
      state.isFetching = true;
    },
    createExercisesSuccess: (state, action) => {
      state.isFetching = false;
      state.createdExercises = action.payload;
    },
    createExercisesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    //UPDATE EXERCISES
    updateExercisesStart: (state) => {
      state.isFetching = true;
    },
    updateExercisesSuccess: (state, action) => {
      state.isFetching = false;
      state.updatedExercises = action.payload;
    },
    updateExercisesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    // DELETE  EXERCISES
    deleteExercisesStart: (state) => {
      state.isFetching = true;
    },
    deleteExercisesSuccess: (state, action) => {
      state.isFetching = false;
      state.deletedExercises = action.payload;
    },
    deleteExercisesFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
  },
});

export const {
  getAllExercisesStart,
  getAllExercisesSuccess,
  getAllExercisesFailure,
  getExercisesByIdStart,
  getExercisesByIdSuccess,
  getExercisesByIdFailure,
  createExercisesStart,
  createExercisesSuccess,
  createExercisesFailure,
  updateExercisesStart,
  updateExercisesSuccess,
  updateExercisesFailure,
  deleteExercisesStart,
  deleteExercisesSuccess,
  deleteExercisesFailure,
} = excercisesSlice.actions;

export default excercisesSlice.reducer;
