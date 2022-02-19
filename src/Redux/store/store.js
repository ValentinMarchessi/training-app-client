import { configureStore } from '@reduxjs/toolkit'
import userLoginReducer from '../reducers/userLoginReducer'
import dietsReducer from '../reducers/dietsReducer'
import exercisesReducer from '../reducers/exercisesReducer'
import registerReducer from '../reducers/registerReducer'
import routinesReducer from '../reducers/routinesReducer'
import allUsersReducer from '../reducers/allUsersReducer'


export default configureStore({
    reducer: {
        user: userLoginReducer,
        register: registerReducer,
        diets: dietsReducer,
        exercises: exercisesReducer,
        routines: routinesReducer,
        allUsers: allUsersReducer
    },
})