import style from './ViewDiets.module.scss';
import DietCard from '../DietCard/DietCard.jsx';

const diet = {
	name: 'Dieta Cetogénica',
	clients: [
		{ name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
		{ name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
		{ name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
		{ name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
		{ name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
	],
	weekly: {
		energy: 4000,
		carbs: 200,
		fats: 300,
		proteins: 400,
	},
};

export default function ViewDiets() {
	return (
		<div className={style.body}>
			<h1 id={style.myPlans}>Planes</h1>
			<div className={style.plans}>
				<DietCard name={diet.name} clients={diet.clients} weekly={diet.weekly} />
				<DietCard name={diet.name} clients={diet.clients} weekly={diet.weekly} />
				<DietCard name={diet.name} clients={diet.clients} weekly={diet.weekly} />
				<DietCard name={diet.name} clients={diet.clients} weekly={diet.weekly} />
			</div>
		</div>
	);
}
