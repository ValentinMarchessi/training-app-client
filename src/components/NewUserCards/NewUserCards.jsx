import React from 'react'
import './newUserCards.scss'

const NewUserCards = ({ img, title, user }) => {
    return (
        <div className="contentCards">
            <div className={!user ? "cardRutes disable" : "cardRutes"} style={{ zIndex: '1' }}>
                <img className='imgCardRutes' src={img} alt={title} />
                <div className="contetTitleInfo">{title}</div>
            </div>
        </div>
    )
}

export default NewUserCards