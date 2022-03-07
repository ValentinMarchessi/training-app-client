import { useSelector } from 'react-redux';
//COMPONENTS
import ButtonHomeMenu from '../components/ButtonHomeMenu/ButtonHomeMenu';
//IMAGES
import fitness from '../../../assets/images/imageBg.png';
import diets from '../../../assets/images/diets.jpg';
import shopping from '../../../assets/images/shopping.jpg';
//STYLES
import s from './HomeClient.module.scss';
import News from '../components/News/News';
import homeStyle from '../Home.module.scss';

const HomeClient = () => {
	const currentUser = useSelector((states) => states.user.currentUser);

	return (
		<div className={s.container}>
			<News />
			<div className={homeStyle.buttonContainer}>
				<ButtonHomeMenu title="Routines" linkTo="/routines" background={fitness} lock={!currentUser} />
				<ButtonHomeMenu title="Diets" linkTo="/diets" background={diets} lock={!currentUser} />
				<ButtonHomeMenu title="Shop" linkTo="/shop" background={shopping} />
			</div>
		</div>
	);
}

export default HomeClient;