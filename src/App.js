import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Clients, Diets, Exercises, Home, Landing, Payment, Recipes, Routines, Search, Settings, SignUpSequence } from './Pages';
import { ExercisesCreate, ExercisesView } from './Pages/Exercises';
import { AccountUser, HistoryUser, PaymentMethod, ProfileUser } from './Pages/Settings';
import { CreateDiet, ViewDiets } from './Pages/Diets';
import { CreateRecipe } from './Pages/Recipes';
import { RoutineDetail } from './Pages/Routines';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/shop" element={<Search />} />
				<Route path="/newUser" element={<SignUpSequence />} />
				<Route path="/routines" element={<Routines />}>
					<Route path=":routineId" element={<RoutineDetail />} />
				</Route>
				<Route path="/clients" element={<Clients />} />
				<Route path="/diets" element={<Diets />}>
					<Route index element={<ViewDiets />} />
					<Route path="create" element={<CreateDiet />} />
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
				<Route path="test" element={<CreateRecipe />} />
				<Route path="/recipes" element={<Recipes />} />
				<Route path="/payment" element={<Payment />}>
					<Route path="success" element={<Success/>}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
