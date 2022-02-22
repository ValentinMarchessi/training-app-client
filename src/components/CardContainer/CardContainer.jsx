import * as React from 'react';
import styleModule from './CardContainer.module.scss';
/*
    PROPS

    cards: Card[] (arreglo de objetos Card definidos abajo)
    
    interface Card{
        title: string,
        img: string (URL),
        disabled?: boolean,
        route: string          para el elemento <Link> en la card
    }

    CardElement: JSX.Element

    CardElement es algún elemento JSX que acepte las props definidas en la interface Card, 
    ej: <InfoCards title="Perro" img="./dog.jpg"/>, <NewsCard title="Rusia invade la Republica Checa" img={imgURL} />

    ----- OJO: al pasar el CardElement, se pasa como un objeto, no como un elemento JSX. -----
    ej: <CardContainer cards={cardArray} CardElement={InfoCards}/>

    direction = 'row'|'column'
*/

export default function CardContainer({ cards, CardElement, direction = 'row' }) {
    return (
		<div style={{flexDirection: direction}} className={styleModule.container}>
			{cards.map((card) => (
				<CardElement {...card} />
			))}
		</div>
	);
}
