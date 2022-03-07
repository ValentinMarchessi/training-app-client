import React from 'react';
import { useSelector } from 'react-redux';
//COMPONENTS
import ButtonHomeMenu from '../components/ButtonHomeMenu/ButtonHomeMenu';
import News from '../components/News/News';
//IMAGES
import routines from '../../../assets/images/imageBg.png';
import excercise from '../../../assets/images/routines.png';
import diets from '../../../assets/images/diets.jpg';
import recipes from '../../../assets/images/recipes.jpg';
import shopping from '../../../assets/images/shopping.jpg';
import client from '../../../assets/images/client.png';
//STYLES
import s from './HomeProfessional.module.scss';
import homeStyle from '../Home.module.scss';

const HomeProfessional = () => {
	const user = useSelector((state) => state.user.currentUser);

	const commonCards = (
		<>
			<ButtonHomeMenu linkTo="/clients" title="Clients" background={client} />
			<ButtonHomeMenu linkTo="/shop" title="Shop" background={shopping} />
		</>
	);

	const nutritionistCards = (
		<>
			<ButtonHomeMenu linkTo="/recipes" title="Recipes" background={recipes} />
			<ButtonHomeMenu linkTo="/diets" title="Diets" background={diets} />
		</>
	);

	const trainerCards = (
		<>
			<ButtonHomeMenu linkTo="/exercises" title="Exercices" background={excercise} />
			<ButtonHomeMenu linkTo="/routines" title="Routines" background={routines} />
		</>
	);

	return (
		<div>
			<div className={s.container}>
				<News />
				<div className={homeStyle.buttonContainer}>
					{commonCards}
					{user.PTrainer && trainerCards}
					{user.Nutritionist && nutritionistCards}
				</div>
			</div>
		</div>
	);
};
export default HomeProfessional;
