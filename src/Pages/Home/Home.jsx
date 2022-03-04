import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux'
import HomeProfessional from './HomeProfessional/HomeProfessional';
import HomeClient from './HomeClient/HomeClient';

const Home = () => {
	const user = useSelector(state => state.user.currentUser)
	console.log('User:',user)
	return (
		<div className={styles.page}>
			<Navbar />
			{user && (user.PTrainer || user.Nutritionist) ? <HomeProfessional/> : <HomeClient/>}
		</div>
	);
};

export default Home;