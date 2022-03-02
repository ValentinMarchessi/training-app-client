import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
//PAGES
import { Clients, Diets, Exercises, Home, Landing, Payment, Recipes, Routines, Search, Settings, SignUpSequence } from './Pages';
import CreateDiet from './Pages/Diets/CreateDiet/CreateDiet.jsx';
import { ExercisesCreate, ExercisesView } from './Pages/Exercises';
import RoutineDetail from './Pages/Routines/RoutineDetail/Routine';
import { AccountUser, HistoryUser, PaymentMethod, ProfileUser } from './Pages/Settings';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/shop" element={<Search />} />
				<Route path="/newUser" element={<SignUpSequence />} />
				<Route path="/routines" element={<Routines />}>
					<Route path="/:routineId" element={<RoutineDetail />} />
				</Route>
				<Route path="/clients" element={<Clients />}></Route>
				<Route path="/diets" element={<Diets />}>
					<Route path="createDiet" element={<CreateDiet />} />
				</Route>
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
				<Route path="/recipes" element={<Recipes />} />
				<Route path="/payment" element={<Payment />} />
			</Routes>
		</div>
	);
}

export default App;
