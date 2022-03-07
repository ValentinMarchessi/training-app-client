import React, { useEffect } from 'react'
import background from '../../assets/images/landingBackground.png'
import test1 from '../../assets/images/carrousel1.jpg'
import test2 from '../../assets/images/carrousel2.jpg'
import './Landing.scss'
import AuthForm from './Form/AuthForm/Form';
import autoScroll from '../../helpers/autoScroll/autoScroll' // Documentación en el .js
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


export default function LandingPage() {
    // console.log(useAuth0())
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuth0()

    console.log(user)

    useEffect(() => {
        setTimeout(() => {
            autoScroll('caroussel', 'right', 'loop', 2)//Hace el carrusel. Se bugea un poco, por ahí después lo cambie
        }, 1000);
        window.addEventListener('resize', () => autoScroll())

        document.getElementById('logInText').style.borderBottom = '10px solid #3f59b8'

        //Para ajustar el recorte del carrusel a cualquier dispositivo
        const landingHeight = document.getElementsByClassName('landingContainer')[0].clientHeight;
        document.getElementById('caroussel').style.clipPath = `path('m 0 0 v ${landingHeight} h 236 Q 566 620 567 242 V 84 v -84 z')`;
        if (location.state === 'register') {
            document.getElementById('signUpText').style.borderBottom = '10px solid #3f59b8'
            document.getElementById('logInText').style.borderBottom = '10px solid transparent'
            autoScroll('authform', 'right')
        }
    }, [])

    return (
        <div className='landingContainer'>
            <h1 className='title'>Training app</h1>
            <div id='caroussel'>
<<<<<<< HEAD
                <img className='background' src={background} alt='1'/>
                <img className='background' src={test1} alt='2'/>
                <img className='background' src={test2} alt='3'/>
=======
                <img className='background' src={background} alt='1' />
                <img className='background' src={test1} alt='2' />
                <img className='background' src={test2} alt='3' />

>>>>>>> 794eb2c7bda30ac80c22169a041cbacc94356cf2
            </div>
            <div className='choices'>
                <div id='optionselect'>
                    <h2 id='logInText' onClick={() => {
                        autoScroll('authform', 'left')
                        document.getElementById('logInText').style.borderBottom = '10px solid #3f59b8'
                        document.getElementById('signUpText').style.borderBottom = '10px solid transparent'
                    }}>Log In</h2>
                    <hr />
                    <h2 id='signUpText' onClick={() => {
                        autoScroll('authform', 'right')
                        document.getElementById('signUpText').style.borderBottom = '10px solid #3f59b8'
                        document.getElementById('logInText').style.borderBottom = '10px solid transparent'
                    }}>Sign Up</h2>
                    <hr />
                    <h2 id='guest' style={{ marginLeft: 10 }} onClick={() => {
                        navigate('/home')
                    }}>Continue as guest</h2>
                </div>
                <div id='authform'>
                    <AuthForm method={'login'} />
                    <AuthForm method={'register'} />
                </div>
            </div>

        </div>
    )
}