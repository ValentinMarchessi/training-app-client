import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.scss";
import Landing from "./Pages/Landing/Landing";
import HomeTrainer from './Pages/HomeTrainer/HomeTrainer'
import Settings from './Pages/Settings/Settings'
import SignUpSequence from './Pages/SignUpSequence/SignUpSequence';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<HomeTrainer />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/newUser' element={<SignUpSequence />} />
            </Routes>
        </div>
    );
}

export default App;
