import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.scss";
import Landing from "./Pages/Landing/Landing";
import Home from './Pages/Home/Home';
import Settings from './Pages/Settings/Settings';
import SignUpSequence from './Pages/SignUpSequence/SignUpSequence';
import Routine from './Pages/Routine/Routine.jsx';
import Routines from './Pages/Routines/Routines.jsx';
import Search from './Pages/Search/Search.jsx';
import RoutineDetail from './Pages/RoutineDetail/RoutineDetail';
import Payment from './Pages/Payment/Payment';
import RecipeForm from './Pages/RecipeForm/RecipeForm';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/landing' element={<Landing />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/newUser' element={<SignUpSequence />} />
                <Route path='/routine' element={<Routine />} />
                <Route path='/routines' element={<Routines />} />
                <Route path='/search/:type' element={<Search />} />
                <Route path='/routineDetail' element={<RoutineDetail />} />
                <Route path='/payment/' element={<Payment />} />
                <Route path='/createRecipe' element={ <RecipeForm/> }/> 
            </Routes>
        </div>
    );
}

export default App;
