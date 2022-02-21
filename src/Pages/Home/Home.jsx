import React, { useEffect } from 'react';
import './home.scss';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import HomeTrainer from './HomeTrainer/HomeTrainer';

const Home = () => {
    const user = useSelector(state => state.user.currentUser)
    return (
        <div className="contentHomeTrainer">
            <Navbar user={user} />
            {user.type === 'trainer' && <HomeTrainer/>}
        </div>
    );
};

export default Home;
