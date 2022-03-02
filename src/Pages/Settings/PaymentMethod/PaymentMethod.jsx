//STYLES
import styles from './PaymentMethod.module.scss';
//IMAGES
import ReceiptIcon from '@mui/icons-material/Receipt';
import Card from './Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../../Redux/apiCalls/transaction/getTransactions';
import { useEffect } from 'react';

export default function PaymentMethod() {
	const dispatch = useDispatch();
	const transactions = useSelector(store => store.transactions.transactions);
	const user = useSelector(store => store.user.currentUser);

	useEffect(() => {
		getTransactions(dispatch, user.accessToken,user.userId);
	}, [dispatch, getTransactions])

	const tableRows = transactions.map(transaction => {
		const { id, method, createdAt, receipt } = transaction;
		const { card } = method;
		const date = new Date(createdAt);
		return (
			<tr key={id}>
				<td className={styles.id}>{id}</td>
				<td>
					<span>**** **** **** {card.last4}</span>
					<br />
					<span>
						{card.brand} {method.type}
					</span>
				</td>
				<td>{date.toLocaleString('en-GB', { timeZone: 'UTC' })}</td>
				<td className={styles.receipt}>
					<a href={receipt}><ReceiptIcon fontSize='large'/></a>
				</td>
			</tr>
		);
	}
	)

	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<h1>Cards</h1>
				<div className={styles.cards}>
					<Card brand="Visa" name="Marchessi Valentín" expiration="04/24" last4="4581" />
					<Card brand="Master Card" name="Marchessi Valentín" expiration="04/24" last4="4581" />
					<Card brand="Master Card" name="Marchessi Valentín" expiration="04/24" last4="4581" />
					<Card brand="Master Card" name="Marchessi Valentín" expiration="04/24" last4="4581" />
				</div>
			</div>
			<div className={styles.section}>
				<h1>Transactions</h1>
				<table id={styles.transactionTable}>
					<thead>
						<tr id={styles.headerRow}>
							<th>Transaction ID</th>
							<th>Payment Info</th>
							<th>Date</th>
							<th>Receipt</th>
						</tr>
					</thead>
					<tbody>
						{ tableRows}
					</tbody>
				</table>
			</div>
		</div>
	);
}
