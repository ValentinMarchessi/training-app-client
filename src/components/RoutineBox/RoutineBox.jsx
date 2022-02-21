import style from './RoutineBox.module.scss';
import AvatarGroup from '../AvatarGroup/AvatarGroup.jsx';
import CircuitPill from '../CircuitPill/CircuitPill.jsx';
import DietPill from '../DietPill/DietPill.jsx';

export default function RoutineBox({ name, users, circuits, diet }) {
    return (
		<div className={style.box}>
			<div className={style.section}>
				<h1>{name}</h1>
				<AvatarGroup users={users} max={5} />
			</div>
			<hr className={style.separator} />
			<div className={style.section}>
				<h2>Circuitos</h2>
				{circuits.map((circuit, index) => (
					<CircuitPill key={index} {...circuit} />
				))}
			</div>
			<hr className={style.separator} />
			<div className={style.section}>
				<h2>Dieta</h2>
				<DietPill {...diet} />
			</div>
		</div>
	);
}