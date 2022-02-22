import style from './DietPill.module.scss';
import Pill from '../../../components/Pill/Pill.jsx';

import { bolt, wheat, fish, drumstick } from '../../../assets/images/icons';

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
