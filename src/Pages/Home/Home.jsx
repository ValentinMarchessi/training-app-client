import React from 'react'
import './home.scss'
import { listInfo, listNews, listNewUser, listDisableUser } from '../../data'
import Navbar from '../../components/Navbar/Navbar'
import NewsCards from '../../components/NewsCards/NewsCards'
import InfoCards from '../../components/InfoCards/InfoCards'
import NewUserCards from '../../components/NewUserCards/NewUserCards'

const Home = () => {
    const user = null;

    return (
        <div className='contentHomeTrainer'>
            <Navbar user={user} />
            <div className="downContainer">
                <div className="leftContain">
                    <div className="contentTitle">
                        <span className="titleNews" >PANEL</span>
                    </div>
                    <div className="contentCardsNews">
                        {listNews.map((data, i) => (
                            <NewsCards
                                key={i}
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
                    <div className='infoCards'>
                        {user && listInfo.map(data => (
                            <InfoCards
                                key={data.title}
                                title={data.title}
                                img={data.img}
                            />
                        ))
                        }
                    </div>
                    <div className='infoCards'>
                        {!user
                            &&
                            listNewUser.map(data => (
                                <InfoCards
                                    key={data.title}
                                    title={data.title}
                                    img={data.img}
                                />

                            ))
                        }
                        {!user
                            &&
                            listDisableUser.map(data => (
                                <NewUserCards
                                    key={data.title}
                                    title={data.title}
                                    img={data.img}
                                    user={user}
                                />

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home