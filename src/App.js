import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.scss";
import Landing from "./Pages/Landing/Landing";
import Home from './Pages/Home/Home'
import Settings from './Pages/Settings/Settings'
import Routine from './Pages/Routine/Routine.jsx'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/routine' element={<Routine />} />
            </Routes>
        </div>
    );
}

export default App;
