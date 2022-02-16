import React from 'react'
import './infoCards.scss'

const InfoCards = ({ img, title }) => {
    return (
        <div className="contentCards">
            <div className="cardRutes" style={{ zIndex: '1' }}>
                <img className='imgCardRutes' src={img} alt={title} />
                <div className="contetTitleInfo">{title}</div>
            </div>
        </div>
    )
}

export default InfoCards