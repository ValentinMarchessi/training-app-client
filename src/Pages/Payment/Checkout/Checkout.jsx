import styles from './Checkout.module.scss';
import user_avatar from '../../../assets/images/imageUser.jpg';
import { star } from '../../../assets/images/icons';
import yoga from '../../../assets/images/yoga.jpg';
import { Avatar } from '../../../components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postCreateTransaction } from '../../../Redux/apiCalls/transaction/createTransaction';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../../assets/images/dep.jpg';
import { baseUrlDev } from '../../../config/requestMethod/publicRequest';
import TransactionSuccess from './TransactionSuccess';
import TransactionError from './TransactionError';
const KEY = 'pk_test_51KTHNqKxK712fkWkpddjvo4wS93yK5sVKG0cUZ5bLcIsxXc5J8UUfToFNZYXf09altAHfam57Sgxi8dfKQIil2r600FLkfDU2C';

export default function Checkout() {
	const user = useSelector((state) => state.user.currentUser);
	const [transaction, setTransaction] = useState({
		payload: null,
		completed: false,
		success: false,
	});
	const dispatch = useDispatch();

	const location = useLocation()
	const { product, owner } = location.state;
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
						amount: product.price * 100,
					},
					{
						headers: {
							token: user.accessToken,
						},
					}
				);
				const { amount, receipt_url, payment_method_details } = res.data;
				const data = {
					productId: product.id,
					amount,
					method: payment_method_details,
					receipt: receipt_url,
				};
				if (res.status == 200) {
					await postCreateTransaction(dispatch, product.id, user.userId, data, user.accessToken);
					setTransaction({ payload: data, completed: true, success: true });
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
		description: `Your total is $${(product.price + 0.4).toFixed(2)}`,
		amount: (product.price + 0.4) * 100,
		token: onToken,
		stripeKey: KEY,
	};

	return !transaction.completed ? (
		<>
			<div className={styles.details}>
				<div className={styles.header}>
					<h1>{product.title}</h1>
					<div id={styles.merit}>
						<img src={star} alt="star" />
						<p id={styles.rating}>{product.rating || '?'}/5</p>
						<p id={styles.reviews}>({product.reviews || '?'} reseñas)</p>
					</div>
				</div>

				<div id={styles.routineCard}>
					<div id={styles.user}>
						<Avatar style={{height: "50px"}} src={owner.profile_img} />
						<div className={styles.info}>
							<p id={styles.name}>{owner.username}</p>
							<p id={styles.title}>{owner.title}</p>
						</div>
					</div>
					<img id={styles.routineImage} src={yoga} alt="routineImage" />
				</div>
			</div>
			<div className={styles.checkout}>
				<h1>Price resume</h1>
				<div id={styles.pricing}>
					<p className={styles.subtle}>Subtotal</p>
					<p className={styles.subtle}>${product.price}</p>
					<p className={styles.subtle}>Service fee</p>
					<p className={styles.subtle}>$0.40</p>
					<hr />
					<h3 id={styles.total}>Total</h3>
					<h3>${(product.price + 0.4).toFixed(2)}</h3>
				</div>

				{/* BOTON PARA REALIZAR EL COBRO CON STRIPE */}
				<div id={styles.checkoutButton}>
					<StripeCheckout {...stripeOptions} billingAddress shippingAddress>
						<button>Buy</button>
					</StripeCheckout>
				</div>
			</div>
		</>
	) : (transaction.success ? <TransactionSuccess /> : <TransactionError />);
}
