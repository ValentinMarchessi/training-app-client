import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import styles from './Payment.module.scss';
import user_avatar from '../../assets/images/imageUser.jpg';
import { star } from '../../assets/images/icons';
import yoga from '../../assets/images/yoga.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { baseUrlDev } from '../../config/requestMethod/publicRequest';
import Logo from '../../assets/images/dep.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { postCreateTransaction } from '../../Redux/apiCalls/transaction/createTransaction';
import { Avatar, Navbar } from '../../components';
const KEY = 'pk_test_51KTHNqKxK712fkWkpddjvo4wS93yK5sVKG0cUZ5bLcIsxXc5J8UUfToFNZYXf09altAHfam57Sgxi8dfKQIil2r600FLkfDU2C';

export default function Payment() {
	{
		/* Traigo los datos del usuario */
	}
	const user = useSelector((state) => state.user.currentUser);
	const transaction = useSelector((state) => state.transactions);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// const location = useLocation()

	//const { routineID } = useParams()
	const routineId = '130833bb-07e3-405b-8d55-4ba86d76b8a6';
	
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await baseUrlDev.post(
					'transaction/payment',
					{
						tokenId: stripeToken.id,
						amount: 500,
					},
					{
						headers: {
							token: user.accessToken,
						},
					}
                );
                const { amount, receipt_url, payment_method_details } = res.data;
                const data = {
					productId: routineId,
					amount: amount,
					method: payment_method_details,
					receipt: receipt_url,
				};
				res && await postCreateTransaction(dispatch, routineId, user.userId, data, user.accessToken);
				if(res.status === 200) navigate('success', { state: res.data  });
			} catch (error) {
				console.log(error);
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken]);


	const stripeOptions = {
		name: 'Training App',
		image: Logo,
		description: 'Your total is $5.40',
		amount: 540,
		token: onToken,
		stripeKey: KEY,
	};

    return (
		<>
			<Navbar />
			<div className={styles.page}>
				<div className={styles.details}>
					<div className={styles.header}>
						<h4>Yoga</h4>
						<h1>CLASES DE YOGA</h1>
						<div id={styles.merit}>
							<img src={star} alt="star" />
							<p id={styles.rating}>4/5</p>
							<p id={styles.reviews}>(70 reseñas)</p>
						</div>
					</div>

					<div id={styles.routineCard}>
						<div id={styles.user}>
							<Avatar src={user_avatar} />
							<div className={styles.info}>
								<p id={styles.name}>roberto123</p>
								<p id={styles.title}>Instructor de yoga</p>
							</div>
						</div>
						<img id={styles.routineImage} src={yoga} alt="routineImage" />
					</div>
				</div>
				<div className={styles.checkout}>
					<h1>Price resume</h1>
					<div id={styles.pricing}>
						<p className={styles.subtle}>Subtotal</p>
						<p className={styles.subtle}>$5</p>
						<p className={styles.subtle}>Service fee</p>
						<p className={styles.subtle}>$0.40</p>
						<hr />
						<h3 id={styles.total}>Total</h3>
						<h3>$5.40</h3>
					</div>

					{/* BOTON PARA REALIZAR EL COBRO CON STRIPE */}
					<div id={styles.checkoutButton}>
						<StripeCheckout {...stripeOptions} billingAddress shippingAddress>
							<button>Continue to checkout</button>
						</StripeCheckout>
					</div>
				</div>
			</div>
		</>
	);
}
