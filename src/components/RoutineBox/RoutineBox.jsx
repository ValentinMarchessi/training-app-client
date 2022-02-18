import style from './RoutineBox.module.scss';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AvatarGroup from '../AvatarGroup/AvatarGroup.jsx';
import CircuitPill from '../CircuitPill/CircuitPill.jsx';
export default function RoutineBox({ name, users, circuits, diet }) {

    return (
		<div className={style.box}>
			<div id={style.header}>
				<h1>{name}</h1>
				<AvatarGroup users={users} max={4} />
			</div>
			<hr className={style.separator} />
            <div id={style.circuits}>
                <span>Circuitos</span>
				{circuits.map((circuit) => (
					<CircuitPill {...circuit} />
				))}
			</div>
			<hr className={style.separator} />
		</div>
	);
}