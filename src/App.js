import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.scss";
import Landing from "./Pages/Landing/Landing";
import Home from './Pages/Home/Home'
import Settings from './Pages/Settings/Settings'
import SignUpSequence from './Pages/SignUpSequence/SignUpSequence';
import Routine from './Pages/Routine/Routine.jsx'
import Search from './Pages/Search/Search.jsx'
import RoutineDetail from './Pages/RoutineDetail/RoutineDetail';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/newUser' element={<SignUpSequence />} />
                <Route path='/routine' element={<Routine />} />
                <Route path='/search' element={<Search />} />
                <Route path='/routineDetail' element={<RoutineDetail />} />
            </Routes>
        </div>
    );
}

export default App;
