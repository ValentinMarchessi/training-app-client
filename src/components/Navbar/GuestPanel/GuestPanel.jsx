import style from './GuestPanel.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

export default function GuestPanel() {
    const { logout } = useAuth0()
    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <div className={style.buttonA} onClick={() => logout()}>
                Sign up
            </div>
            <div className={style.buttonA}>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} className={style.link} to="/">
                    Log in
                </Link>
            </div>
        </div >
    );
}