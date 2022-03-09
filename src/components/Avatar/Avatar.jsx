import React from 'react';
import placeholder from '../../assets/images/avatarplaceholder.png';
import styles from './Avatar.module.scss';

export default function Avatar({ src, style }) {
	function handleBrokenURL(event) {
		event.target.src = placeholder;
	}
	return <img id={styles.avatar} style={style} src={src || placeholder} onError={handleBrokenURL} alt="avatar" />;
}
