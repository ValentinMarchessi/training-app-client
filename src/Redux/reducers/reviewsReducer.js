import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    createdReview: {},
    reviewById: {},
  },
  reducers: {
    // CREATE Review
    createReviewStart: (state) => {
      state.isFetching = true;
    },
    createReviewSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.createdReview = action.payload;
    },
    createReviewFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    //GET ID Review
    getReviewByIdStart: (state) => {
      state.isFetching = true;
    },
    getReviewByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.reviewById = action.payload;
    },
    getReviewByIdFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
  },
});

export const {
  createReviewStart,
  createReviewSuccess,
  createReviewFailure,
  getReviewByIdStart,
  getReviewByIdSuccess,
  getReviewByIdFailure,
} = reviewSlice.actions;

export default reviewSlice.reducer;
