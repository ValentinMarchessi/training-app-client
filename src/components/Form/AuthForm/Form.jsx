import React, {useState} from 'react'
import './Form.scss'
import google from '../../../assets/images/google.png'
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter.png'
import autoScroll from '../../../helpers/autoScroll/autoScroll'
import validate from '../../../helpers/inputValidators/AuthValidator'

export default function AuthForm({method}){

    let [formData, setFormData] = useState({
        empty:true
    })

    let [errors, setErrors] = useState({})

    

    let string
    if(method==='register') string='Let\'s get started'
    else string='Log In'

    function inputHandler(event){

        setErrors(validate({
            ...formData,
            [event.target.name]: event.target.value
        }))
            
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            empty:false
        })
        console.log(errors)
        console.log(formData)
    }
    return(
        <div className='auth'>
            
            <form className='authForm' onSubmit={event=>{
                event.preventDefault()
                if(method==='register'&&!Object.keys(errors).length){
                    alert('hacer conexiones de registro')
                } else if(method==='login') alert('hacer conexiones de logeo')
            }}>
                <div>
                    <div>
                        <img src={google} alt='google'/>
                        <input type='text' name='username' placeholder='Username' onChange={event=>inputHandler(event)}/>
                    </div>
                    {method==='register'?<span className={errors.username?'active':'inactive'}>{errors.username}</span>:null}
                    
                </div>

                {method==='register'
                ?   <div>
                        <div>
                            <img src={google} alt='google'/>
                            <input type='text' name='email' placeholder='Email' onChange={inputHandler}/>
                        </div>
                        
                        <span className={errors.email?'active':'inactive'}>{errors.email}</span>
                    </div>
                :   null}
                
                <div>
                    <div>
                        <img src={google} alt='google'/>
                        <input type='password' name='password' placeholder='Password' onChange={inputHandler}/>
                    </div>
                    {method==='register'
                    ?<span className={errors.password?'active':'inactive'}>{errors.password} <span style={{color:'red'}}>{errors.passwordRequiredLength}</span> {formData.password&&(errors.passwordRequiredLength&&errors.passwordIncludesNumber)?'and':null} <span style={{color:'red'}}>{errors.passwordIncludesNumber}</span></span>
                    :null}
                    
                    
                </div>

                {method==='register'
                ?   <div>
                        <div>
                            <img src={google} alt='google'/>
                            <input type='password' name='confirmPassword' placeholder='Confirm password' onChange={inputHandler}/>
                        </div>
                            <span className={errors.confirmPassword?'active':'inactive'}>{errors.confirmPassword}</span>
                        
                    </div>
                :   null}
                
                <div style={{alignItems: 'center'}}>
                    
                <input className={method==='register'?((Object.keys(errors).length||formData.empty)?'unready':'ready'):'ready'} style={{textIndent:0}} type='submit' value={string}/>
                </div>
                
            </form>
            <div className='mediaAuth'>
                <p>Or {method==='register'?'sign up':'log in'} with your social media</p>
                <div>
                    <img src={google} alt='google'/>
                    <img src={facebook} alt='google'/>
                    <img src={twitter} alt='google'/>
                </div>
            </div>
            {method==='register'
                ?   <p style={{position:'absolute', bottom:0, left:0, right:0 , textAlign:'center'}}>
                        Already got an account? <span style={{color:'#2B73FF', cursor:'pointer'}} onClick={()=>{
                            autoScroll('form', 'right')
                            document.getElementById('logInText').style.borderBottom='10px solid #3f59b8'
                            document.getElementById('signUpText').style.borderBottom='10px solid transparent'
                        }}>
                            Log in
                        </span>
                    </p>

                :   <p style={{position:'absolute', bottom:0, left:0, right:0, textAlign:'center'}}>
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