import style from './DietCard.module.scss';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import { InfoPill, Avatar } from '../../../components';
import { wheat, fish, drumstick, bolt } from '../../../assets/images/icons';

/* PROPS
name: string
clients: [
    {name: string, avatar: string(URL)},
    ...
]
weekly:{
    energy: string,    EJEMPLO  153kcal
    carbs: string,		 		24g
    fats: string,		 		26g
    proteins: string	 		16g
}
*/

export default function DietCard({ name, clients, weekly }) {
	const daily = {
		energy: Math.round(weekly.energy / 7),
		carbs: Math.round(weekly.carbs / 7),
		fats: Math.round(weekly.fats / 7),
		proteins: Math.round(weekly.proteins / 7),
	}

	return (
		<Stack sx={{ height: 150, p: 2, borderRadius: 3, bgcolor: '#201f24', justifyContent:"space-evenly" }} direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
			<div className={style.info}>
				<h1>{name}</h1>
				<div className={style.avatarGroup}>
					{clients.map((client) => (
						<Avatar alt={client.name} src={client.avatar} />
					))}
				</div>
			</div>
			<div className={style.section}>
				<h2>Promedio Diario</h2>
				<div className={style.grid}>
					<InfoPill id={style.energy} header="Energía" icon={bolt} text={`${daily.energy}kcal`} />
					<InfoPill id={style.carbs} header="Carbohidratos" icon={wheat} text={`${daily.carbs}g`} />
					<InfoPill id={style.fats} header="Grasas" icon={fish} text={`${daily.fats}g`} />
					<InfoPill id={style.proteins} header="Proteínas" icon={drumstick} text={`${daily.proteins}g`} />
				</div>
			</div>
			<div className={style.section}>
				<h2>Total Semanal</h2>
				<div className={style.grid}>
					<InfoPill id={style.energy} header="Energía" icon={bolt} text={`${weekly.energy}kcal`} />
					<InfoPill id={style.carbs} header="Carbohidratos" icon={wheat} text={`${weekly.carbs}g`} />
					<InfoPill id={style.fats} header="Grasas" icon={fish} text={`${weekly.fats}g`} />
					<InfoPill id={style.proteins} header="Proteínas" icon={drumstick} text={`${weekly.proteins}g`} />
				</div>
			</div>
		</Stack>
	);
}
