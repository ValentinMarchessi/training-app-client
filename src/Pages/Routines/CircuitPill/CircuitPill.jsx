import style from './CircuitPill.module.scss';
import { run, clock } from '../../../assets/images/icons';

export default function CircuitPill({ id, name, length, duration }) {
	//id queda guardado para routing a una ruta de detalles
	return (
		<div className={style.pill}>
			<div className={style.section}>
				<h3>{name}</h3>
			</div>
			<hr className={style.separator} />
			<div className={style.section}>
				<img src={run} alt="run" />
				<span>{length} ejercicios</span>
			</div>
			<hr className={style.separator} />
			<div className={style.section}>
				<img src={clock} alt="clock" />
				<span>{duration} mins.</span>
			</div>
		</div>
	);
}
