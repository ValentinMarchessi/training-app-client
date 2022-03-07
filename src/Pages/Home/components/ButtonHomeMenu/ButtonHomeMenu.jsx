import { Link } from 'react-router-dom';
import s from './ButtonHomeMenu.module.scss';

//Se debe enviar el titulo que tendrá el boton y el background que tendrá el mismo
const ButtonHomeMenu = ({ title, background, linkTo, lock }) => {
	const content = (
		<div className={`${s.container} ${lock && s.lock}`}>
			<h2> {title} </h2>
			<img src={background} alt="background" className={s.background} />
		</div>
	);

	return !lock ? <Link to={linkTo}>{content}</Link> : <Link to='/'>{content}</Link>;
};

export default ButtonHomeMenu;
