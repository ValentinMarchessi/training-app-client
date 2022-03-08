import style from './RoutineCard.module.scss';
import avatarPlaceholder from '../../../../assets/images/avatarPlaceholder.svg';
import { star } from '../../../../assets/images/icons';

export default function RoutineCard( {name, author, email, title, rating, reviews, price, image, avatar} ) {
/* De ser necesaria una refactorización, se puede extraer un componente SmallProfile del div con className={style.profile}*/
console.log('Raiting', rating)
return (
	<div className={style.card}>
		<div className={style.profile}>
			<img id={style.avatar} alt={author} src={avatarPlaceholder}/>
			<div className={style.info}>
				<h1 style={{color:'white'}}>{author}</h1>
				<h2 style={{color:'white'}}>{email}</h2>
			</div>
		</div>

		<div className={style.body}>
			<img alt={name} src={image}></img>
		</div>

		<div className={style.footer}>
			<h1>{title}</h1>
			<strong>Precio : ${price}</strong>
			
			<div className={style.merit}>
				<p className={style.rating}> <img src={star} alt="star"/> {rating ? rating : 0}/5 </p>
				<p className={style.subtle}> ({reviews} reseñas)</p>
			</div>
		</div>
	</div>
	);
}
