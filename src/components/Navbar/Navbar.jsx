import React, { useState } from 'react'
import './navbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import Avatar from '../../assets/images/dep.jpg'

const Navbar = ({ user }) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        console.log(1)
        setActive(!active)
    }
    return (
        <div className="topBarContainer">
            <div className="leftItems">
                <HomeIcon className="homeItem" />
                <span className="page" >Inicio</span>
            </div>
            {user ?
                <div className="rightItems">
                    <div>
                        <img className="avatarNavbar" src={Avatar} alt="" />
                    </div>
                    <div className="contentMenu">
                        <MenuIcon onClick={handleClick} className="hamburgerItem" />
                        <div id="contentSeting" className={active ? "contentSeting active" : "contentSeting"}>
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
                : <div className='guest'>
                    <div className='buttonA'>
                        Sign up
                    </div>
                    <div className='buttonA'>
                        Log in
                    </div>
                </div>}

        </div>
    )
}

export default Navbar