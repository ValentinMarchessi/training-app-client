import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.scss";

//PAGES
import { Exercises, Home, Landing, Routines } from './Pages';
import { ExercisesCreate, ExercisesView } from './Pages/Exercises';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/home' element={<Home />} />
                <Route path='/routines' element={<Routines />}></Route>
                <Route path='/exercises' element={<Exercises />}>
                    <Route index element={<ExercisesView/>}/>
                    <Route path='create' element={<ExercisesCreate/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
