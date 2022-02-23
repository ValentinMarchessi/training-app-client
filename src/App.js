import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.scss";
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

//PAGES
import { Diets, Exercises, Home, Landing, Routines, Search, SignUpSequence } from './Pages';
import { ExercisesCreate, ExercisesView } from './Pages/Exercises';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Search />} />
                <Route path='/newUser' element={<SignUpSequence />} />
                <Route path='/routines' element={<Routines />}></Route>
                <Route path='/diets' element={<Diets />} />
                <Route path='/exercises' element={<Exercises />}>
                    <Route index element={<ExercisesView />} />
                    <Route path='create' element={<ExercisesCreate />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
