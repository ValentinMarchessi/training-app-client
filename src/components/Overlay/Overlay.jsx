import { useState } from 'react';
import styles from './Overlay.module.scss';

export default function Overlay({active, onClose, children, style }) {
    return active ? (
		<div style={style} id={styles.content}>
			<button id={styles.close} onClick={onClose}>X</button>
			{children}
		</div>
	) : (
		<></>
	);
}