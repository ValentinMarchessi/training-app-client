import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../../Redux/apiCalls/getNewsCall/getNewsCall';
//COMPONENTS
import ButtonHomeMenu from '../components/ButtonHomeMenu/ButtonHomeMenu';
import NewsCard from '../components/NewsCard/NewsCard';
//IMAGES
import routines from '../../../assets/images/imageBg.png';
import excercise from '../../../assets/images/routines.png';
import diets from '../../../assets/images/diets.jpg';
import recipes from '../../../assets/images/recipes.jpg';
import shopping from '../../../assets/images/shopping.jpg';
import client from '../../../assets/images/client.png';
//STYLES
import s from './HomeProfessional.module.scss';
import { useNavigate } from 'react-router-dom';

const HomeProfessional = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const news = useSelector((state) => state.news.news);
	const user = useSelector((state) => state.user.currentUser);
	const pTrainerButtons = (
		<div className={s.buttonContainer}>
			<ButtonHomeMenu onClick={() => navigate('/clients')} title="Clients" background={client} />
			<ButtonHomeMenu onClick={() => navigate('/routines')} title="Routines" background={routines} />
			<ButtonHomeMenu onClick={() => navigate('/exercises')} title="Exercices" background={excercise} />
			<ButtonHomeMenu onClick={() => navigate('/shop')} title="Shop" background={shopping} />
		</div>
	);

	const nutritionistButton = (
		<div className={s.buttonContainer}>
			<ButtonHomeMenu onClick={() => navigate('/clients')} title="Clients" background={client} />
			<ButtonHomeMenu onClick={() => navigate('/diets')} title="Diets" background={diets} />
			<ButtonHomeMenu onClick={() => navigate('/recipes')} title="Recipes" background={recipes} />
			<ButtonHomeMenu onClick={() => navigate('/shop')} title="Shop" background={shopping} />
		</div>
	);

	const dual = (
		<div className={s.buttonContainer}>
			<ButtonHomeMenu onClick={() => navigate('/clients')} title="Clients" background={client} />
			<ButtonHomeMenu onClick={() => navigate('/routines')} title="Routines" background={routines} />
			<ButtonHomeMenu onClick={() => navigate('/exercises')} title="Exercices" background={excercise} />
			<ButtonHomeMenu onClick={() => navigate('/diets')} title="Diets" background={diets} />
			<ButtonHomeMenu onClick={() => navigate('/recipes')} title="Recipes" background={recipes} />
			<ButtonHomeMenu onClick={() => navigate('/shop')} title="Shop" background={shopping} />
		</div>
	);

	useEffect(() => {
		getNews(dispatch);
	}, []);

	return (
		<div>
			<div className={s.container}>
				<div className={s.left}>
					<div className={s.newsContainer}>
						{news.length ? (
							news.map((item) => {
								return <NewsCard title={item.title} img={item.image_url} url={item.url} />;
							})
						) : (
							<NewsCard />
						)}
					</div>
				</div>

				<div className={s.right}>{user.PTrainer && user.Nutritionist ? dual : user.PTrainer ? pTrainerButtons : nutritionistButton}</div>
			</div>
		</div>
	);
};
export default HomeProfessional;
