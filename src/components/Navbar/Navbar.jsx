import React, { useState } from 'react'
import './navbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import Avatar from '../../assets/images/noUser.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../Redux/reducers/userLoginReducer';
import { useDispatch } from 'react-redux'

const Navbar = ({ user }) => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)

    const handleClick = () => {
        console.log(1)
        setActive(!active)
    }

    const handleClickLogout = (e) => {
        e.preventDefault()
        dispatch(logoutUser(user))
    }

    const navigate = useNavigate()

    return (
        <div className="topBarContainer">
            <div className="leftItems">
                <HomeIcon className="homeItem" onClick={()=>{
                    navigate('/')
                }}/>
                <span className="page" >Inicio</span>
            </div>
            {user ?
                <div className="rightItems">
                    <p>{user.username}</p>
                    <div>
                        <img className="avatarNavbar" src={user.profileImg??Avatar} alt="" />
                    </div>
                    <div className="contentMenu">
                        <MenuIcon onClick={handleClick} className="hamburgerItem" />
                        <div id="contentSeting" className={active ? "contentSeting active" : "contentSeting"}>
                            <div className="triangle" />
                            <div className="contentList">
                                <div className="itemList">
                                    <LogoutIcon className="iconItems" />
                                    <span className="textSeting" onClick={handleClickLogout} >Log out</span>
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
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} className='link' to='/landing'>
                            Sign up
                        </Link>
                    </div>

                    <div className='buttonA'>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} className='link' to='/landing'>
                            Log in
                        </Link>
                    </div>
                </div>}

        </div>
    )
}

export default Navbar