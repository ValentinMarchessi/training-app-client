import React from 'react';
//COMPONENTS
import ButtonHomeMenu from '../../../components/ButtonHomeMenu/ButtonHomeMenu';
import NewsCard from '../NewsCard/NewsCard';
//IMAGES
import fitness from '../../../assets/images/imageBg.png';
import excercise from '../../../assets/images/imageBg.png';
import diets from '../../../assets/images/diets.jpg';
import recipes from '../../../assets/images/recipes.jpg';
import shopping from '../../../assets/images/shopping.jpg';
import client from '../../../assets/images/client.png';
//STYLES
import s from './HomeProfessional.module.scss'
import { useNavigate } from 'react-router-dom';



const HomeProfessional = () => {
      const navigate = useNavigate();

      return (
			<div className={s.container}>
				<div className={s.left}>
					<div className={s.newsContainer}>
						<NewsCard />
					</div>
				</div>

				<div className={s.right}>
					<div className={s.buttonContainer}>
						<ButtonHomeMenu onClick={() => navigate('/clients')} title="Clients" background={client} />
						<ButtonHomeMenu onClick={() => navigate('/routines')} title="Routines" background={fitness} />
						<ButtonHomeMenu onClick={() => navigate('/exercises')} title="Exercices" background={excercise} />
						<ButtonHomeMenu onClick={() => navigate('/shop')} title="Shop" background={shopping} />
						<ButtonHomeMenu onClick={() => navigate('/diets')} title="Diets" background={diets} />
						<ButtonHomeMenu onClick={() => navigate('/recipes')} title="Recipes" background={recipes} />
					</div>
				</div>
			</div>
		);
}
export default HomeProfessional;