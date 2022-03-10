import { createSlice } from "@reduxjs/toolkit";

const newsReducer = createSlice({
      name: "News",
      initialState: {
            news: [],
            fetching: false,
            error: false
      },
      reducers: {
            startGetNews: (state) => {
                  state.fetching = true;
            },
            successNews: (state, action) => {
                  state.fetching = false;
                  state.error = false;
                  state.news = action.payload;
            },
            errorNews: (state) => {
                  state.fetching = false;
                  state.error = true;
            }
      }
});

export const {
      startGetNews,
      successNews,
      errorNews
} = newsReducer.actions;

export default newsReducer.reducer;