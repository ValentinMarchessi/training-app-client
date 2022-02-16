import React from 'react'
import './Form.scss'
import google from '../../../assets/images/google.png'
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter.png'
import autoScroll from '../../../helpers/autoScroll'

export default function AuthForm({method}){

    let string
    if(method==='register') string='Let\'s get started'
    else string='Log In'

    function inputHandler(input){
        console.log(input)
    }
    return(
        <div className='auth'>
            
            <form className='authForm' onSubmit={event=>{
                event.preventDefault()
                alert('enviado')
            }}>
                <div>
                    <img src={google} alt='google'/>
                    <input type='text' placeholder='Username' onChange={event=>{
                        inputHandler(event.target.value)
                    }}/>
                </div>

                {method==='register'
                ?   <div>
                        <img src={google} alt='google'/>
                        <input type='text' placeholder='Email' onChange={event=>{
                            inputHandler(event.target.value)
                        }}/>
                    </div>
                :   null}
                
                <div>
                    <img src={google} alt='google'/>
                    <input type='password' placeholder='Password' onChange={event=>{
                        inputHandler(event.target.value)
                    }}/>
                </div>

                {method==='register'
                ?   <div>
                        <img src={google} alt='google'/>
                        <input type='password' placeholder='Confirm password' onChange={event=>{
                            inputHandler(event.target.value)
                        }}/>
                    </div>
                :   null}
                
                <div>
                    <input className='submitForm' style={{textIndent:0}} type='submit' value={string} onChange={event=>{
                        inputHandler(event.target.value)
                    }}/>
                </div>
                
            </form>
            <div className='mediaAuth'>
                <p>Or sign up with your social media</p>
                <div>
                    <img src={google} alt='google'/>
                    <img src={facebook} alt='google'/>
                    <img src={twitter} alt='google'/>
                </div>
            </div>
            {method==='register'
                ?   <p style={{position:'absolute', bottom:0, left:0, right:0}}>
                        Already got an account? <span style={{color:'#2B73FF', cursor:'pointer'}} onClick={()=>{
                            autoScroll('form', 'right')
                            document.getElementById('logInText').style.borderBottom='10px solid #3f59b8'
                            document.getElementById('signUpText').style.borderBottom='10px solid transparent'
                        }}>
                            Log in
                        </span>
                    </p>

                :   <p style={{position:'absolute', bottom:0, left:0, right:0}}>
                        Don't have an account yet? <span style={{color:'#2B73FF', cursor:'pointer'}} onClick={()=>{
                            autoScroll('form', 'left')
                            document.getElementById('signUpText').style.borderBottom='10px solid #3f59b8'
                            document.getElementById('logInText').style.borderBottom='10px solid transparent'
                        }}>
                            Sign up
                        </span>
                    </p>}
        </div>
    )
}