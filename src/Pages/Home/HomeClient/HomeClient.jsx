import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../../../Redux/apiCalls/getNewsCall/getNewsCall';
//COMPONENTS
import ButtonHomeMenu from '../components/ButtonHomeMenu/ButtonHomeMenu';
import NewsCard from '../components/NewsCard/NewsCard';
//IMAGES
import fitness from '../../../assets/images/imageBg.png';
import diets from '../../../assets/images/diets.jpg';
import shopping from '../../../assets/images/shopping.jpg';
//STYLES
import s from './HomeClient.module.scss';

const HomeClient = () => {
	const currentUser = useSelector((states) => states.user.currentUser);
	const news = useSelector((state) => state.news.news);
	const dispatch = useDispatch();

	useEffect(() => {
		getNews(dispatch);
	}, [dispatch, getNews]);

	return (
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

			<div className={s.right}>
				<div className={s.buttonContainer}>
					{currentUser ? <ButtonHomeMenu title="Routines" background={fitness} /> : <ButtonHomeMenu title="Routines" background={fitness} lock={true} />}
					{currentUser ? <ButtonHomeMenu title="Diets" background={diets} /> : <ButtonHomeMenu title="Diets" background={diets} lock={true} />}
					{currentUser ? <ButtonHomeMenu title="Shop" background={shopping} /> : <ButtonHomeMenu title="Shop" background={shopping} lock={true} />}
				</div>
			</div>
		</div>
	);
};

export default HomeClient;
