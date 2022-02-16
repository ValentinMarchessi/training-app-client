import React, { useEffect } from 'react'
import background from '../../assets/images/landingBackground.png'
import './Landing.scss'
import AuthForm from '../../components/Form/RegisterForm/Form'
import autoScroll from '../../helpers/autoScroll' // Documentación en el .js

export default function LandingPage(){

    return(
        <div className='landingContainer'>
            <h1 className='title'>Training app</h1>
            <img className='background' src={background} alt='background'/>
            <div className='choices'>
                <h1 id='signUpText' onClick={()=>{
                    autoScroll('form', 'left')
                    document.getElementById('signUpText').style.borderBottom='10px solid #3f59b8'
                    document.getElementById('logInText').style.borderBottom='10px solid transparent'
                }}>Sign Up</h1>

                <hr/>

                <h1 id='logInText' onClick={()=>{
                    autoScroll('form', 'right')
                    document.getElementById('logInText').style.borderBottom='10px solid #3f59b8'
                    document.getElementById('signUpText').style.borderBottom='10px solid transparent'
                }}>Log In</h1>
            </div>
            <div id='form'>
                <AuthForm method={'register'}/>
                <AuthForm method={'login'}/>
            </div>
            
        </div>
    )
}