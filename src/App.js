import React from 'react';
import { Routes, Route } from 'react-router-dom';

import "./App.scss";

//PAGES
import { Diets, Exercises, Landing, Routines, Search, SignUpSequence, Home, Settings } from './Pages';
import Recipes from './Pages/Recipes/Recipes';
import { ExercisesCreate, ExercisesView } from './Pages/Exercises';
import { AccountUser, HistoryUser, PaymentMethod, ProfileUser } from './Pages/Settings';
import CreateDiet from './components/CreateDiet/CreateDiet';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Search />} />
                <Route path='/newUser' element={<SignUpSequence />} />
                <Route path='/routines' element={<Routines />}></Route>
                <Route path='/diets' element={<Diets />}>
                    <Route path='createDiet' element={<CreateDiet />} />
                </Route>
                <Route path='/exercises' element={<Exercises />}>
                    <Route index element={<ExercisesView />} />
                    <Route path='create' element={<ExercisesCreate />} />
                </Route>
                <Route path='/settings' element={<Settings />}>
                    <Route index element={<AccountUser />} />
                    <Route path='profile' element={<ProfileUser />} />
                    <Route path='payment' element={<PaymentMethod />} />
                    <Route path='history' element={<HistoryUser />} />
                </Route>
                <Route path='/recipes' element={<Recipes />} />
                <Route path='test' element={<CreateRecipe/>} />
            </Routes>
        </div>
    );
}

export default App;
