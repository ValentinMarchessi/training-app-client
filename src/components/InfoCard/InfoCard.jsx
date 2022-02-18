import React from 'react';
import style from './infoCard.module.scss';
import Styled from 'styled-components';

const Container = Styled.div.attrs((props) => ({ className: `${style.container} ${props.disabled && style.disabled}` }))`
    opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

const DisabledOverlay = Styled.div`
    width: fit-content;
    height: fit-content;
`;

const InfoCard = ({ img, title, disabled = false }) => {
	return (
		<Container disabled={disabled}>
			<div className={style.cardRutes} style={{ zIndex: '1' }}>
				<img className={style.imgCardRutes} src={img} alt={title} />
				<div className={style.contetTitleInfo}>{title}</div>
			</div>
		</Container>
	);
};

export default InfoCard;
