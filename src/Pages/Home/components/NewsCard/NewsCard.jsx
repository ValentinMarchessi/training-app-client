import React from 'react'
import style from './newsCard.module.scss'

const NewsCard = ({ img, title, url }) => {
    return (
        <a className={style.cardNews} href={url} target='_blank'>
            <img className={style.imgCardNews} src={img} alt={title} />
            <div className={style.contentTitleNews}>{title}</div>
        </a>
    )
}

export default NewsCard