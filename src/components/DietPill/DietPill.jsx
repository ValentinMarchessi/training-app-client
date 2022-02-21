import style from './DietPill.module.scss';
import Pill from '../Pill/Pill.jsx';

import bolt from '../../assets/images/bolt.svg';
import wheat from '../../assets/images/wheat.svg';
import fish from '../../assets/images/fish.svg';
import drumstick from '../../assets/images/drumstick.svg';

export default function DietPill({ name, energy, carbs, fats, proteins }) {
	return (
		<div className={style.container}>
			<h1>{name}</h1>
			<div className={style.pills}>
				<Pill icon={bolt} text={`${energy}kcal`} />
				<Pill icon={wheat} text={`${carbs}g`} />
				<Pill icon={fish} text={`${fats}g`} />
				<Pill icon={drumstick} text={`${proteins}g`} />
			</div>
		</div>
	);
}
