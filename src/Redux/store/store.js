import { configureStore } from '@reduxjs/toolkit';
import allUsersNutritionitsReducer from '../reducers/allUsersNutritionist';
import allUsersReducer from '../reducers/allUsersReducer';
import allUsersTrainersReducer from '../reducers/allUsersTrainer';
import dietsReducer from '../reducers/dietsReducer';
import exercisesReducer from '../reducers/exercisesReducer';
import registerReducer from '../reducers/registerReducer';
import routinesReducer from '../reducers/routinesReducer';
import updateUserReducer from '../reducers/updateUserReducer';
import userLoginReducer from '../reducers/userLoginReducer';


export default configureStore({
    reducer: {
        user: userLoginReducer,
        register: registerReducer,
        updateUser: updateUserReducer,
        diets: dietsReducer,
        exercises: exercisesReducer,
        routines: routinesReducer,
        allUsers: allUsersReducer,
        allUsersTrainer: allUsersTrainersReducer,
        allUsersNutritionits: allUsersNutritionitsReducer
    },
});