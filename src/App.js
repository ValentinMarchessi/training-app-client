import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.scss";
import Landing from "./Pages/Landing/Landing";
import Home from './Pages/Home/Home';
import HomeNutritionist from './Pages/Home/HomeNutritionist/HomeNutritionist';
import HomeTrainer from './Pages/Home/HomeTrainer/HomeTrainer';
import HomeGuest from './Pages/Home/HomeGuest/HomeGuest';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/home' element={<Home />}/>
            </Routes>
        </div>
    );
}

export default App;
