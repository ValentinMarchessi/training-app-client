import style from './RoutineCard.module.scss';
import avatarPlaceholder from '../../assets/images/avatarPlaceholder.svg';
import star from '../../assets/images/star.svg';

export default function RoutineCard({ name, author, authorTitle, rating, reviews, price, image, avatar }) {
    /* De ser necesaria una refactorización, se puede extraer un componente SmallProfile del div con className={style.profile}*/
	return (
		<div className={style.card}>
			<div className={style.profile}>
                <img id={style.avatar} alt={author} src={avatar ? avatar : avatarPlaceholder} />
                <div className={style.info}>
				    <h1 style={{color:'white'}}>{author}</h1>
                    <h2 style={{color:'white'}}>{authorTitle}</h2>
                </div>
			</div>
			<div className={style.body}>
				<img id={style.background} alt={name} src={image}></img>
				<h1>{name}</h1>
			</div>
			<div className={style.footer}>
				<div id={style.merit}>
                    <p id={style.rating}><img src={star} alt="star"/>{rating}/5</p>
					<p className={style.subtle}>({reviews} reseñas)</p>
                </div>
                <div id={style.pricing}>
                    <p className={style.subtle}>A partir de</p>
                    <strong>${price} por clase</strong>
                </div>
			</div>
		</div>
	);
}
