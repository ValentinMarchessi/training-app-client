import React from 'react';
import { Routes, Route } from 'react-router-dom';

import "./App.scss";
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

//PAGES
import { Diets, Exercises, Landing, Routines, Search, SignUpSequence, Home } from './Pages';
import Recipes from './Pages/Recipes/Recipes';
import { ExercisesCreate, ExercisesView } from './Pages/Exercises';
import RecipeContainer from './Pages/Recipes/components/RecipeContainer/RecipeContainer';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<Home/>}/>
                <Route path='/shop' element={<Search />} />
                <Route path='/newUser' element={<SignUpSequence />} />
                <Route path='/routines' element={<Routines />}></Route>
                <Route path='/diets' element={<Diets />} />
                <Route path='/exercises' element={<Exercises />}>
                    <Route index element={<ExercisesView />} />
                    <Route path='create' element={<ExercisesCreate />} />
                </Route>
                <Route path='/recipes' element={<Recipes/>}/>
                <Route path='test' element={<RecipeContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
