import React from 'react'
import background from '../../assets/images/landingBackground.png'
import './Landing.scss'

export default function LandingPage(){

    return(
        <div className='landingContainer'>
            <h1 className='title'>Training app</h1>
            <img className='background' src={background} alt='background'/>
            <div className='choices'>
                <h1>Sign Up</h1><hr/><h1>Log In</h1>
            </div>
            
        </div>
    )
}