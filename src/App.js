import React from 'react';
import { Routes, Route } from 'react-router-dom';

import "./App.scss";
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

//PAGES
import { Diets, Exercises, Home, Landing, Routines, Search, Settings, SignUpSequence } from './Pages';
import { ExercisesCreate, ExercisesView } from './Pages/Exercises';
import { AccountUser, HistoryUser, PaymentMethod, ProfileUser } from './Pages/Settings';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/shop" element={<Search />} />
				<Route path="/newUser" element={<SignUpSequence />} />
				<Route path="/routines" element={<Routines />}></Route>
				<Route path="/diets" element={<Diets />} />
				<Route path="/settings" element={<Settings />}>
					<Route index element={<AccountUser />} />
					<Route path="profile" element={<ProfileUser />} />
					<Route path="history" element={<HistoryUser />} />
					<Route path="payment" element={<PaymentMethod />} />
				</Route>
				<Route path="/exercises" element={<Exercises />}>
					<Route index element={<ExercisesView />} />
					<Route path="create" element={<ExercisesCreate />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
