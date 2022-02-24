import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.scss";

//PAGES
import { Diets, Exercises, Home, Landing, Routines, Search, SignUpSequence } from './Pages';
import { ExercisesCreate, ExercisesView } from './Pages/Exercises';
//HOMES
import HomeClient from './Pages/Home/HomeClient/HomeClient';
import HomeProfesional from './Pages/Home/HomeProfesional/HomeProfesional';
import Routine from './Pages/Routines/RoutineDetail/Routine';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/home' element={<Home />}> 
                    <Route path='client' element={<HomeClient/>} />
                    <Route path='profesional' element={<HomeProfesional/>} />
                </Route>
                <Route path='/shop' element={<Search/>}/>
                <Route path='/newUser' element={<SignUpSequence/>}/>
                <Route path='/routines' element={<Routines />}>
                </Route>
                <Route path='/routines/:routineId' element={<Routine />}/>
                <Route path='/diets' element={<Diets/>}/>
                <Route path='/exercises' element={<Exercises />}>
                    <Route index element={<ExercisesView/>}/>
                    <Route path='create' element={<ExercisesCreate/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
