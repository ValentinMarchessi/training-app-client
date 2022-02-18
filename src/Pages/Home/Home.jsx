import React from 'react';
import './home.scss';
import { listInfo, listNews, listNewUser } from '../../data';
import Navbar from '../../components/Navbar/Navbar';
import NewsCard from '../../components/NewsCard/NewsCard';
import InfoCard from '../../components/InfoCard/InfoCard';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';

const Home = () => {
    const user = true;

    return (
        <div className="contentHomeTrainer">
            <Navbar user={user} />
            <div className="downContainer">
                <div className="leftContain">
                    <div className="contentTitle">
                        <span className="titleNews">PANEL</span>
                    </div>
                    <CardContainer cards={listNews} CardElement={NewsCard} />
                </div>
                <div className="rightContain">
                    <div className="contentTitle">
                        <div className="titleInfo">INFO</div>
                    </div>
                    <div className="infoCards">
                        <CardContainer cards={user ? listInfo : listNewUser} CardElement={InfoCard} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
