import React from 'react';
//COMPONENTS
import ButtonHomeMenu from '../components/ButtonHomeMenu/ButtonHomeMenu';
import NewsCard from '../components/NewsCard/NewsCard';
import Navbar  from '../../../components/Navbar/Navbar';
//IMAGES
import routines from '../../../assets/images/imageBg.png';
import excercise from '../../../assets/images/routines.png';
import diets from '../../../assets/images/diets.jpg';
import recipes from '../../../assets/images/recipes.jpg';
import shopping from '../../../assets/images/shopping.jpg';
import client from '../../../assets/images/client.png';
//STYLES
import s from './HomeProfessional.module.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const HomeProfessional = () => {
      const navigate = useNavigate();
	const user = useSelector(state => state.user.currentUser);
	const pTrainerButtons = <div className={s.buttonContainer}>
		<ButtonHomeMenu onClick={() => navigate('/clients')} title="Clients" background={client} />
		<ButtonHomeMenu onClick={() => navigate('/routines')} title="Routines" background={routines} />
		<ButtonHomeMenu onClick={() => navigate('/exercises')} title="Exercices" background={excercise} />
		<ButtonHomeMenu onClick={() => navigate('/shop')} title="Shop" background={shopping} />
	</div>

	const nutritionistButton = <div className={s.buttonContainer}>
		<ButtonHomeMenu onClick={() => navigate('/clients')} title="Clients" background={client} />
		<ButtonHomeMenu onClick={() => navigate('/diets')} title="Diets" background={diets} />
		<ButtonHomeMenu onClick={() => navigate('/recipes')} title="Recipes" background={recipes} />
		<ButtonHomeMenu onClick={() => navigate('/shop')} title="Shop" background={shopping} />
	</div>

	const dual = <div className={s.buttonContainer}>
		<ButtonHomeMenu onClick={() => navigate('/clients')} title="Clients" background={client} />
		<ButtonHomeMenu onClick={() => navigate('/routines')} title="Routines" background={routines} />
		<ButtonHomeMenu onClick={() => navigate('/exercises')} title="Exercices" background={excercise} />
		<ButtonHomeMenu onClick={() => navigate('/diets')} title="Diets" background={diets} />
		<ButtonHomeMenu onClick={() => navigate('/recipes')} title="Recipes" background={recipes} />
		<ButtonHomeMenu onClick={() => navigate('/shop')} title="Shop" background={shopping} />
	</div>

      return (
			<div>
				<div className={s.container}>
					<div className={s.left}>
						<div className={s.newsContainer}>
							<NewsCard />
						</div>
					</div>

					<div className={s.right}>
						{user.PTrainer && user.Nutritionist ? dual : user.PTrainer ? pTrainerButtons : nutritionistButton  }
					</div>
				</div>
			</div>
		);
}
export default HomeProfessional;