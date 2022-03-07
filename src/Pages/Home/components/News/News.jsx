import styles from './News.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../../../Redux/apiCalls/getNewsCall/getNewsCall';
import NewsCard from '../NewsCard/NewsCard';
import { Loading } from '../../../../components';

export default function News() {
	const { news, isFetching, error } = useSelector((state) => state.news);
	const dispatch = useDispatch();

	useEffect(() => {
		getNews(dispatch);
	}, [dispatch, getNews]);

	return (
		<div className={styles.container}>
			{!isFetching ? (
				news.length && news.map((item) => <NewsCard title={item.title} img={item.image_url} url={item.url} />)
			) : (
				<Loading />
			)}
		</div>
	);
}
