import React, { useEffect, useState } from 'react'
import './Form.scss'
import google from '../../../../assets/images/google.png'
import facebook from '../../../../assets/images/facebook.png'
import twitter from '../../../../assets/images/twitter.png'
import autoScroll from '../../../../helpers/autoScroll/autoScroll'
import validate from '../../../../helpers/inputValidators/AuthValidator'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../../Redux/apiCalls/userLoginCall/userLoginCall'
import { register } from '../../../../Redux/apiCalls/registerCall/createRegister'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { authentication } from '../../../../firebase/config-firestore/firabase';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'

export default function AuthForm({ method, cb }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user.currentUser)

    let [formData, setFormData] = useState({
        username: '',
        password: '',
        empty: true
    })
    const [alert, setAlert] = useState(false)

    let [errors, setErrors] = useState({})

    useEffect(() => {
        if (user?.userId) navigate('/')
    }, [user, navigate])

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    let string
    if (method === 'register') string = 'Let\'s get started'
    else string = 'Log In'

    function inputHandler(event) {

        setErrors(validate({
            ...formData,
            [event.target.name]: event.target.value
        }))

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            empty: false
        })
        setAlert(false)
        console.log(errors)
        console.log(formData)
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()
        if (!formData.username || !formData.password) {
            Toast.fire({
                icon: 'info',
                title: 'Invalid Credentials'
            })
        } else {
            if (method === 'login') {
                loginUser(dispatch, formData)
            }
            if (method === 'register') {
                //register(dispatch, formData)
                navigate('/newUser', { state: { formData } })
                //document.getElementById('form2').style.visibility='hidden'
                //return cb()
            }


        }
        setFormData({
            username: '',
            password: '',
            empty: true
        })
    }

    useEffect(() => {
        const handleAlert = () => {
            if (alert) return Toast.fire({
                icon: 'info',
                title: 'Invalid Credentials'
            })
            else return null
        }
        handleAlert()
    }, [alert, Toast])


    const singInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(authentication, provider)
            .then((res) => {
                console.log(res)
                setFormData({
                    username: res.user.displayName,
                    password: res.user.uid,
                    email:res.user.email,
                    empty: false
                })
                method==='register'?navigate('/newUser', { state: { formData } }):loginUser(dispatch, formData)
            })
            .catch((err) => console.log(err.message))
    }

    const singInWithFacebook = () => {
        const provider = new FacebookAuthProvider()
        signInWithPopup(authentication, provider)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <div className='auth' id='auth'>

            <form className='authForm' onSubmit={event => {
                event.preventDefault()
                if (method === 'register' && !Object.keys(errors).length) {

                }
            }}>
                <div>
                    <div>
                        <img src={google} alt='google' />
                        <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={formData.username}
                            onChange={event => inputHandler(event)}
                        />
                    </div>
                    {method === 'register' ? <span className={errors.username ? 'active' : 'inactive'}>{errors.username}</span> : null}

                </div>

                {method === 'register'
                    ? <div>
                        <div>
                            <img src={google} alt='google' />
                            <input type='text' name='email' placeholder='Email' onChange={inputHandler} />
                        </div>

                        <span className={errors.email ? 'active' : 'inactive'}>{errors.email}</span>
                    </div>
                    : null}

                <div>
                    <div>
                        <img src={google} alt='google' />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={inputHandler}
                        />
                    </div>
                    {method === 'register'
                        ? <span className={errors.password ? 'active' : 'inactive'}>{errors.password} <span style={{ color: 'red' }}>{errors.passwordRequiredLength}</span> {formData.password && (errors.passwordRequiredLength && errors.passwordIncludesNumber) ? 'and' : null} <span style={{ color: 'red' }}>{errors.passwordIncludesNumber}</span></span>
                        : null}


                </div>
                {method === 'register'
                    ? <div>
                        <div>
                            <img src={google} alt='google' />
                            <input type='password' name='confirmPassword' placeholder='Confirm password' onChange={inputHandler} />
                        </div>
                        <span className={errors.confirmPassword ? 'active' : 'inactive'}>{errors.confirmPassword}</span>

                    </div>
                    : null}

                <div style={{ alignItems: 'center' }}>

                    <input className={method === 'register'
                        ? ((Object.keys(errors).length || formData.empty) ? 'unready' : 'ready')
                        : 'ready'} style={{ textIndent: 0 }}
                        type='submit'
                        value={string}
                        onClick={handleSubmitClick}
                    />

                </div>

            </form>
            <div className='mediaAuth'>
                <p>Or {method === 'register' ? 'sign up' : 'log in'} with your social media</p>
                <div>
                    <img src={google} alt='google' onClick={singInWithGoogle} />
                    <img src={facebook} alt='google' onClick={singInWithFacebook} />
                    <img src={twitter} alt='google' />
                </div>
            </div>
            {method === 'register'
                ? <p style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center' }}>
                    Already got an account? <span style={{ color: '#2B73FF', cursor: 'pointer' }} onClick={() => {
                        autoScroll('form', 'right')
                        document.getElementById('logInText').style.borderBottom = '10px solid #3f59b8'
                        document.getElementById('signUpText').style.borderBottom = '10px solid transparent'
                    }}>
                        Log in
                    </span>
                </p>
                : <p style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center' }}>
                    Don't have an account yet? <span style={{ color: '#2B73FF', cursor: 'pointer' }} onClick={() => {
                        autoScroll('form', 'left')
                        document.getElementById('signUpText').style.borderBottom = '10px solid #3f59b8'
                        document.getElementById('logInText').style.borderBottom = '10px solid transparent'
                    }}>
                        Sign up
                    </span>
                </p>}
        </div>
    )
}