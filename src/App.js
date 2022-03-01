import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
//PAGES
import Recipes from './Pages/Recipes/Recipes';
import RecipeContainer from './Pages/Recipes/components/RecipeContainer/RecipeContainer';
import { AccountUser, HistoryUser, PaymentMethod, ProfileUser } from './Pages/Settings';
import CreateDiet from './components/CreateDiet/CreateDiet';
import Success from './components/Success/Success';

import {
  Clients,
  Recipes,
  Diets,
  Exercises,
  Home,
  Landing,
  Payment,
  Routines,
  Search,
  Settings,
  SignUpSequence,
} from "./Pages";
import { ExercisesCreate, ExercisesView } from "./Pages/Exercises";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Search />} />
        <Route path="/newUser" element={<SignUpSequence />} />
        <Route path="/routines" element={<Routines />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="/createDiet" element={<CreateDiet />} />
        <Route path="/diets" element={<Diets />}></Route>
        <Route path="/exercises" element={<Exercises />}>
          <Route index element={<ExercisesView />} />
          <Route path="create" element={<ExercisesCreate />} />
        </Route>
        <Route path="/settings" element={<Settings />}>
          <Route index element={<AccountUser />} />
          <Route path="profile" element={<ProfileUser />} />
          <Route path="payment" element={<PaymentMethod />} />
          <Route path="history" element={<HistoryUser />} />
        </Route>
        <Route path="test" element={<CreateRecipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
);

export default App;
