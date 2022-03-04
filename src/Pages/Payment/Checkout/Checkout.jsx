import styles from './Checkout.module.scss';
import user_avatar from '../../../assets/images/imageUser.jpg';
import { star } from '../../../assets/images/icons';
import yoga from '../../../assets/images/yoga.jpg';
import { Avatar } from '../../../components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postCreateTransaction } from '../../../Redux/apiCalls/transaction/createTransaction';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../../assets/images/dep.jpg';
import { baseUrlDev } from '../../../config/requestMethod/publicRequest';
import { style } from '@mui/system';
const KEY = 'pk_test_51KTHNqKxK712fkWkpddjvo4wS93yK5sVKG0cUZ5bLcIsxXc5J8UUfToFNZYXf09altAHfam57Sgxi8dfKQIil2r600FLkfDU2C';

export default function Checkout() {
	const user = useSelector((state) => state.user.currentUser);
	const [transaction, setTransaction] = useState({
		completed: false,
		success: false,
	});
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
				console.log(res)
				if (res?.status === 200) {
					await postCreateTransaction(dispatch, routineId, user.userId, data, user.accessToken);
					setTransaction({ completed: true, success: true });
				} else {
					setTransaction({ completed: true, success: false });
				}
			} catch (error) {
				console.log(error);
				setTransaction({ completed: true, success: false });
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

	return !transaction.completed ? (
		<>
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
						<button>Buy</button>
					</StripeCheckout>
				</div>
			</div>
		</>
	) : (
		<div className={style.result}>
			<h1>{transaction.success ? 'Your purchase has been processed successfully' : 'An error has ocurred during your purchase'}</h1>
		</div>
	);
}
