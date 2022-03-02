import styles from './Card.module.scss';
import { Brands } from './Brands.js';

function formatCardBrand(brand) {
    return brand.replace(/ /g, '').toLowerCase();
}

export default function Card({ last4, name, brand, expiration }) {
    if (formatCardBrand(brand) in Brands) brand = formatCardBrand(brand);
    return (
		<div className={styles.card}>
			<h2 id={styles.number}>**** **** **** {last4}</h2>
			<h3 id={styles.name}>{name}</h3>
			<h3 id={styles.expiration}>{expiration}</h3>
			{brand in Brands ? <img id={styles.logo} src={Brands[brand]} alt="brand" /> : <h1 id={styles.brand}>{brand}</h1>}
		</div>
	);
}