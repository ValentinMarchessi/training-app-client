import React from 'react'
import './newsCards.scss'

const NewsCards = ({ img, title }) => {
    return (
        <div className="cardNews">
            <img className='imgCardNews' src={img} alt={title} />
            <div className="contentTitleNews">{title}</div>
        </div>
    )
}

export default NewsCards