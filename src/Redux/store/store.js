import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import allUsersNutritionitsReducer from '../reducers/allUsersNutritionist';
// import allUsersReducer from '../reducers/allUsersReducer';
// import allUsersTrainersReducer from '../reducers/allUsersTrainer';
// import dietsReducer from '../reducers/dietsReducer';
// import exercisesReducer from '../reducers/exercisesReducer';
import registerReducer from '../reducers/registerReducer';
// import routinesReducer from '../reducers/routinesReducer';
// import updateUserReducer from '../reducers/updateUserReducer';
import userLoginReducer from '../reducers/userLoginReducer';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    user: userLoginReducer,
    register: registerReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store)

// export default configureStore({
//     reducer: {
//         user: userLoginReducer,
//         register: registerReducer,
//         updateUser: updateUserReducer,
//         diets: dietsReducer,
//         exercises: exercisesReducer,
//         routines: routinesReducer,
//         allUsers: allUsersReducer,
//         allUsersTrainer: allUsersTrainersReducer,
//         allUsersNutritionits: allUsersNutritionitsReducer
//     },
// });