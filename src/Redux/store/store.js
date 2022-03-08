import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH, PAUSE,
    PERSIST, persistReducer, persistStore, PURGE,
    REGISTER, REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allUsersNutritionitsReducer from '../reducers/allUsersNutritionist';
import allUsersTrainersReducer from '../reducers/allUsersTrainer';
import clientReducer from '../reducers/clientReducer';
import dietsReducer from '../reducers/dietsReducer';
import exercisesReducer from '../reducers/exercisesReducer';
import newsReducer from '../reducers/newsReducer';
import recipesReducer from '../reducers/recipesReducer';
import registerReducer from '../reducers/registerReducer';
import routinesReducer from '../reducers/routinesReducer';
import transactionReducer from '../reducers/transactionReducer';
import userLoginReducer from '../reducers/userLoginReducer';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    user: userLoginReducer,
    register: registerReducer,
    recipes: recipesReducer,
    routines: routinesReducer,
    exercises: exercisesReducer,
    diets: dietsReducer,
    clients: clientReducer,
    nutritionists: allUsersNutritionitsReducer,
    trainers: allUsersTrainersReducer,
    transactions: transactionReducer,
    news: newsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);