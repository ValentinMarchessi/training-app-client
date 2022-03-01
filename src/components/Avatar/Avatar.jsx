import React from 'react';
import placeholder from '../../assets/images/avatarPlaceholder.svg';
import styles from './Avatar.module.scss';

export default function Avatar({ src, style }) {
	return (
		<div id={styles.thumb}>
			<img style={style} src={src || placeholder} />
		</div>
	);
}
