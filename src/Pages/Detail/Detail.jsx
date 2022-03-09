import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getRoutinesDetails } from '../../Redux/apiCalls/rutinesCall/getRoutinesDetails';
import { getAllTrainers } from '../../Redux/apiCalls/allUsersTrainer/allUsersTrainer';
import { useEffect, useState } from 'react';
import styles from './Detail.module.scss';
import { Avatar, Navbar } from '../../components';
import { star } from '../../assets/images/icons';
//mock de la bd
import { Reviews } from './dbDetails';

export default function Details(props) {
	const dispatch = useDispatch();
	const myRoutine = useSelector((state) => state.routines.routinesDetails);
	const allTrainers = useSelector((state) => state.trainers.usersTrainers);
	let { id } = useParams();
	const user = useSelector((state) => state.user.currentUser);
	const [owner, setOwner] = useState();

	useEffect(() => {
		(async () => {
			await getAllTrainers(dispatch, user.accessToken);
			await getRoutinesDetails(dispatch, id);
		})();
		setOwner(allTrainers.filter((e) => e.id === myRoutine.owner));
	}, []);
	const points = Reviews.map((e) => e.points);
	const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
	const rating = average(points);

	return myRoutine && owner ? (
		<>
			<Navbar />
			<div className={styles.page}>
				<div className={styles.align}>
					<div className={styles.intro}>
						<div className={styles.header}>
							<h1>{myRoutine.title.toUpperCase()}</h1>
						</div>

						<div className={styles.presentation}>
							<Avatar src={owner[0].profile_img} />

							<div className={styles.info}>
								<p id={styles.name}>{owner.username}</p>

								<p id={styles.title}>
									{' '}
									{owner[0].is_personal_trainer
										? owner[0].is_nutritionist
											? 'Personal trainer / Nutricionist'
											: 'Personal trainer'
										: 'Nutricionist'}
								</p>
							</div>
							<div id={styles.merit}>
								<img src={star} alt="star" />
								<p id={styles.rating}>{rating}/5 </p>
								<p id={styles.reviews}>({points.length} reseñas)</p>
							</div>
						</div>
					</div>

					<img id={styles.routineImage} src={myRoutine.image} alt="routineImage" />
				</div>

				<div className={styles.checkout}>
					<h1>{myRoutine.title}</h1>
					<div id={styles.merit}>
						<img src={star} alt="star" />
						<p id={styles.rating}>{rating}/5 </p>
						<p id={styles.reviews}>({points.length} reseñas)</p>
					</div>
					<br />
					<p id={styles.description}>{myRoutine.description}</p>
					<br />

					<p id={styles.title2}>
						{' '}
						{owner[0].is_personal_trainer
							? owner[0].is_nutritionist
								? 'Personal trainer / Nutricionist'
								: 'Personal trainer'
							: 'Nutricionist'}
					</p>
					<div className={styles.alignCheck}>
						<Avatar src={owner[0].profile_img} />
						<div className={styles.info}>
							<p id={styles.name}>{owner.username}</p>
							<p id={styles.title}>
								{' '}
								{owner[0].is_personal_trainer
									? owner[0].is_nutritionist
										? 'Personal trainer / Nutricionist'
										: 'Personal trainer'
									: 'Nutricionist'}
							</p>
							<Link to="/profile">
								<button id={styles.profileButton}>Ver perfil</button>
							</Link>
						</div>
					</div>

					<div id={styles.checkoutButton}>
						<Link to="/payment" state={{ product: myRoutine, owner: owner[0] }}>
							<button>Comprar rutina ${myRoutine.price}</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	) : (
		<p>Loading...</p>
	);
}
