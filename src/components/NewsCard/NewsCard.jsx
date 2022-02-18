import React from 'react'
import style from './newsCard.module.scss'

const NewsCard = ({ img, title }) => {
    return (
        <div className={style.cardNews}>
            <img className={style.imgCardNews} src={img} alt={title} />
            <div className={style.contentTitleNews}>{title}</div>
        </div>
    )
}

export default NewsCard