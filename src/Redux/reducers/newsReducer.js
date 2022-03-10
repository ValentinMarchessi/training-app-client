import { createSlice } from "@reduxjs/toolkit";

const newsReducer = createSlice({
      name: "News",
      initialState:{
            news: [],
            fetching : false,
            error : null
      },
      reducers:{
            startGetNews: (state) =>{
                  state.fetching = true;
            },
            successNews: (state, action) =>{
                  state.fetching = false;
                  state.error = null;
                  state.news = action.payload;
            },
            errorNews : (state, action) =>{
                  state.fetching = false;
                  state.error = action.payload
            }
      }
});

export const {
      startGetNews,
      successNews,
      errorNews
} = newsReducer.actions;

export default newsReducer.reducer;