import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux'
import HomeProfessional from './HomeProfessional/HomeProfessional';
import HomeClient from './HomeClient/HomeClient';

const Home = () => {
	const user = useSelector(state => state.user.currentUser)
	console.log(user)
	/* La store no está guardando isTrainer ni isNutritionist, hay que revisar */
	return (
		<div className={styles.page}>
			<Navbar />
			{user && (user.isTrainer || user.isNutritionist) ? <HomeProfessional/> : <HomeClient/>}
		</div>
	);
};

export default Home;