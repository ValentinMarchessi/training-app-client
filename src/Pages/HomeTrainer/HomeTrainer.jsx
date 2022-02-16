import React, { useState } from 'react'
import './homeTrainer.scss'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import Avatar from '../../assets/images/dep.jpg'
import { listInfo, listNoticias } from '../../data'

const HomeTrainer = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className='contentHomeTrainer'>
            <div className="topBarContainer">
                <div className="leftItems">
                    <HomeIcon className="homeItem" />
                    <span className="page" >Inicio</span>
                </div>
                <div className="rightItems">
                    <div className="contentImg">
                        <img className="avatarNavbar" src={Avatar} alt="" />
                    </div>
                    <div className="contentMenu">
                        <MenuIcon onClick={handleClick} className="hamburgerItem" />
                        <div
                            id="contentSeting"
                            className={active ? "contentSeting active" : "contentSeting"}>
                            <div className="triangle" />
                            <div className="contentList">
                                <div className="itemList">
                                    <LogoutIcon className="iconItems" />
                                    <span className="textSeting" >Log out</span>
                                </div>
                                <div className="itemList">
                                    <SettingsIcon className="iconItems" />
                                    <span className="textSeting" >Settings</span>
                                </div>
                                <div className="itemList">
                                    <HistoryIcon className="iconItems" />
                                    <span className="textSeting" >History</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="downContainer">
                <div className="leftContain">
                    <div className="contentTitle">
                        <div className="contentTitle" >
                            <span className="titleNews" >PANEL</span>
                        </div>
                    </div>
                    <div className="contentCardsNews">
                        {
                            listNoticias.map(data => (
                                <div className="cardNews">
                                    <img className='imgCardNews' src={data.img} alt={data.title} />
                                    <div className="contentTitleNews">{data.title}</div>
                                </div>
                            ))
                        }
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