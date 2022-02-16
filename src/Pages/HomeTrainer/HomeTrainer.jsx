import React from 'react'
import './homeTrainer.scss'

import { listInfo, listNews } from '../../data'
import Navbar from '../../components/Navbar/Navbar'
import NewsCards from '../../components/NewsCards/NewsCards'

const HomeTrainer = () => {
    return (
        <div className='contentHomeTrainer'>
            <Navbar />
            <div className="downContainer">
                <div className="leftContain">
                    <div className="contentTitle">
                        <div className="contentTitle" >
                            <span className="titleNews" >PANEL</span>
                        </div>
                    </div>
                    <div className="contentCardsNews">
                        {listNews.map(data => (
                            <NewsCards
                                key={data.title}
                                title={data.title}
                                img={data.img}
                            />
                        ))}
                    </div>
                </div>
                <div className="rightContain">
                    <div className="contentTitle">
                        <div className="titleInfo" >
                            INFO
                        </div>
                    </div>
                    <div className="contentCards">
                        {
                            listInfo.map(data => (
                                <div className="cardRutes" style={{ zIndex: '1' }}>
                                    <img className='imgCardRutes' src={data.img} alt={data.title} />
                                    <div className="contetTitleInfo">{data.title}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTrainer