import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import {
    Clients,
    Diets,
    Exercises,
    Home,
    Landing,
    Recipes,
    Routines,
    Search,
    Settings,
    SignUpSequence,
} from "./Pages";
import { ExercisesCreate, ExercisesView } from "./Pages/Exercises";
import {
    AccountUser,
    HistoryUser,
    PaymentMethod,
    ProfileUser,
} from "./Pages/Settings";
import { CreateDiet, ViewDiets, DietDetail } from "./Pages/Diets";
import { CreateRecipe } from "./Pages/Recipes";
import { RoutineDetail } from "./Pages/Routines";
import { Checkout, Payment } from "./Pages/Payment";
import Details from "./Pages/Detail/Detail";
import Instructor from "./Pages/Descriptions/Instructor";
import Mensseger from "./components/mensegger/Mensseger";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* poner esta ruta en detalles */}
                <Route path="/details/:id" element={<Details />} />
                {/* hasta aqui */}
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Search />} />
                <Route path="/newUser" element={<SignUpSequence />} />
                <Route path="/routines" element={<Routines />}></Route>
                <Route path="/routines/info/:routineId" element={<RoutineDetail />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/diets" element={<Diets />}>
                    <Route index element={<ViewDiets />} />
                    <Route path="create" element={<CreateDiet />} />
                    <Route path=":dietName" element={<DietDetail />} />
                </Route>
                <Route path="/instructor/:instructorId" element={<Instructor />} />
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
                    <Route index element={<Checkout />} />
                </Route>
                <Route path="/chat" element={<Mensseger />} />
            </Routes>
        </div>
    );
}

export default App;
