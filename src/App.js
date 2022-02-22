import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.scss";
import Landing from "./Pages/Landing/Landing";
import Home from './Pages/Home/Home';
import Routines from './Pages/Routines/Routines';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/home' element={<Home />} />
                <Route path='/routines' element={<Routines />}>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
