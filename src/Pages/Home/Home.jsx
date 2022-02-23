import React, { useEffect } from 'react';
import './home.scss';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';

const Home = () => {
    const user = useSelector(state => state.user.currentUser)
    return (
        <div className="contentHomeTrainer">
            <Navbar user={user}/>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;