import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
    name: "recipes",
    initialState: {
        allRecipes: [],
        allRecipesByUserId: [],
        recipesById: {},
        createdRecipes: {},
        updatedRecipes: {},
        deletedRecipes: {},
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET ALL RECIPES
        getAllRecipesStart: (state) => {
            state.isFetching = true;
        },
        getAllRecipesSuccess: (state, action) => {
            console.log(action);
            state.isFetching = false;
            state.allRecipes = action.payload;
        },
        getAllRecipesFailure: (state) => {
            state.isFetching = true;
            state.error = true;
        },

        // GET ALL RECIPES BY ID
        getAllRecipesByUserIdStart: (state) => {
            state.isFetching = true;
        },
        getAllRecipesByUserIdSuccess: (state, action) => {
            state.isFetching = false;
            state.allRecipesByUserId = action.payload;
        },
        getAllRecipesByUserIdFailure: (state) => {
            state.isFetching = true;
            state.error = true;
        },

        //GET ID RECIPES
        getRecipesByIdStart: (state) => {
            state.isFetching = true;
        },
        getRecipesByIdSuccess: (state, action) => {
            state.isFetching = false;
            state.recipesById = action.payload;
        },
        getRecipesByIdFailure: (state) => {
            state.isFetching = true;
            state.error = true;
        },

        // CREATE RECIPES
        createRecipesStart: (state) => {
            state.isFetching = true;
        },
        createRecipesSuccess: (state, action) => {
            state.isFetching = false;
            state.createdRecipes = action.payload;
        },
        createRecipesFailure: (state) => {
            state.isFetching = true;
            state.error = true;
        },

        //UPDATE RECIPES
        updateRecipesStart: (state) => {
            state.isFetching = true;
        },
        updateRecipesSuccess: (state, action) => {
            state.isFetching = false;
            state.updatedRecipes = action.payload;
        },
        updateRecipesFailure: (state) => {
            state.isFetching = true;
            state.error = true;
        },

        // DELETE  RECIPES
        deleteRecipesStart: (state) => {
            state.isFetching = true;
        },
        deleteRecipesSuccess: (state, action) => {
            state.isFetching = false;
            state.deletedRecipes = action.payload;
        },
        deleteRecipesFailure: (state) => {
            state.isFetching = true;
            state.error = true;
        },
    },
});

export const {
    getAllRecipesStart,
    getAllRecipesSuccess,
    getAllRecipesFailure,
    getRecipesByIdStart,
    getRecipesByIdSuccess,
    getRecipesByIdFailure,
    createRecipesStart,
    createRecipesSuccess,
    createRecipesFailure,
    updateRecipesStart,
    updateRecipesSuccess,
    updateRecipesFailure,
    deleteRecipesStart,
    deleteRecipesSuccess,
    deleteRecipesFailure,
    getAllRecipesByUserIdStart,
    getAllRecipesByUserIdSuccess,
    getAllRecipesByUserIdFailure,
} = recipesSlice.actions;

export default recipesSlice.reducer;
