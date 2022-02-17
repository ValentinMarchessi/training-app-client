import React, { useEffect } from 'react'
import background from '../../assets/images/landingBackground.png'
import test1 from '../../assets/images/carrousel1.jpg'
import test2 from '../../assets/images/carrousel2.jpg'
import './Landing.scss'
import AuthForm from '../../components/Form/AuthForm/Form'
import autoScroll from '../../helpers/autoScroll/autoScroll' // Documentación en el .js
import { Link } from 'react-router-dom'

export default function LandingPage(){
    
    useEffect(()=>{
        setTimeout(() => { 
            autoScroll('carrousel', 'right', 'loop', 2)//Hace el carrusel. Se bugea un poco, por ahí después lo cambie
        }, 1000);
        window.addEventListener('resize', ()=>autoScroll())
    },[])

    return(
        <div className='landingContainer'>
            <h1 className='title'>Training app</h1>

            <div id='carrousel'>
                <img className='background' src={background} alt='1'/>
                <img className='background' src={test1} alt='2'/>
                <img className='background' src={test2} alt='3'/>
            </div>

            <Link to='/home'><div id='guest'>Continue as guest</div></Link>
            
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