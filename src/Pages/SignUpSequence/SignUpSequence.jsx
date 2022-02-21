import React, { useEffect, useState } from 'react'
import './SignUpSequence.scss'
import test1 from '../../../src/assets/images/test1.png'
import test2 from '../../../src/assets/images/test2.png'
import test3 from '../../../src/assets/images/test3.png'
import test4 from '../../../src/assets/images/test4.png'
import done from '../../../src/assets/images/done.png'
import { Link, Navigate, useLocation } from 'react-router-dom'
import Select from '../../components/Select/Select.jsx'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import app from '../../firebase/config-firestore/firabase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../Redux/apiCalls/registerCall/createRegister'
import AuthForm from '../../components/Form/AuthForm/Form.jsx'
import { width } from '@mui/system'

export default function SignUpSequence() {

    //let touchScreen = ('ontouchstart' in window)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const location = useLocation()
    console.log(location)

    const [userData, setUserData] = useState({
        ...location.state.formData
    })

    const [imgUpdate, setImgUpdate] = useState()

    useEffect(() => {
        console.log(userData)

    }, [userData, imgUpdate])

    const handleImage = (e) => {
        e.preventDefault()
        //Para que las imagen con el mismo nombre no se pisen
        const fileName = new Date().getTime() + imgUpdate.name
        //Traer del storage los datos
        const storage = getStorage(app)
        //Referencia
        const storageRef = ref(storage, fileName)
        //COnfiguracion de Firebase para los File y conseguir la URL
        const uploadTask = uploadBytesResumable(storageRef, imgUpdate);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                    setUserData({
                        ...userData,
                        profile_img: downloadURL
                    })

                }
                );
            })
    }

    return (
        <div id='mainSequenceContainer'>
            <div className='sequenceContainer' id='firstS'>
                <h2>Training app</h2>
                <h1 id='title'>Tell us... what brings you here?</h1>

                <div className='choiceContainer'>
                    <h1 id='looking'>I'm looking to...</h1>

                    <div className='userChoices'>
                        <div id='serviceChoice' onClick={() => {
                            document.getElementById('clientChoice').style.pointerEvents = 'none'

                            document.getElementById('secondS').scrollIntoView()
                        }}>
                            <img src={test1} alt='x' />
                            <h2>Sell my services</h2>
                        </div>

                        <div id='clientChoice' onClick={() => {
                            setUserData({
                                ...userData,
                                userType: 'client'
                            })
                            document.getElementById('serviceChoice').style.pointerEvents = 'none'
                            document.getElementById('secondS').style.display = 'none'
                            document.getElementById('thirdS').scrollIntoView()
                        }}>
                            <img src={test2} alt='x' />
                            <h2>Train myself</h2>
                        </div>
                    </div>

                </div>
            </div>

            <div className='sequenceContainer' id='secondS'>
                <h2>Training app</h2>
                <h1 id='title'>What kind of services do you provide?</h1>

                <div className='choiceContainer'>
                    <h1 id='looking'>I'm a...</h1>

                    <div className='userChoices'>
                        <div onClick={() => {
                            setUserData({
                                ...userData,
                                is_personal_trainer: !userData.is_personal_trainer
                            })
                        }}>
                            <img src={test3} alt='x' />
                            <h2 style={userData.is_personal_trainer ? { height: 52, padding: 10, backgroundColor: '#3f59b8' } : null}>Trainer</h2>
                        </div>

                        <div onClick={() => {
                            setUserData({
                                ...userData,
                                is_nutritionist: !userData.is_nutritionist
                            })
                        }}>
                            <img src={test4} alt='x' />
                            <h2 style={userData.is_nutritionist ? { height: 52, padding: 10, backgroundColor: '#3f59b8' } : null}>Nutritionist</h2>
                        </div>
                    </div>
                    <div id={(userData.is_nutritionist || userData.is_personal_trainer) ? 'continue' : 'wait'} onClick={() => {
                        document.getElementById('thirdS').scrollIntoView()
                    }}>Continue</div>
                </div>
            </div>

            <div className='sequenceContainer' id='thirdS'>
                <h2>Training app</h2>
                <h1 id='title' style={{ marginTop: '60px' }}>Want to complete your profile now?</h1>

                <div id='divisor'>
                    <div id='continue' onClick={() => {
                        document.getElementById('fourthS').scrollIntoView()
                    }}>
                        Sure
                    </div>
                    <div id='continue' onClick={() => {
                        document.getElementById('fourthS').style.display = 'none'
                        document.getElementById('fifthS').scrollIntoView()
                        setTimeout(() => {
                            navigate('/landing')
                        }, 2000)
                    }}>
                        I'd rather not
                    </div>
                </div>
            </div>

            <div className='sequenceContainer' id='fourthS'>
                <h2>Training app</h2>
                <h1 id='title'>Please describe yourself</h1>
                <p id='title' style={{ fontSize: '15px', color: '#6b6979', padding: 0 }}>We will use this data to deliver a better experience</p>
                <div id='userForm'>
                    <Select options={[{value:'Male', display:'Male'}, {value:'Female',  display:'Female'}, {value:'Other',  display:'Other'}]} label='Gender' callback={event => {
                        setUserData({ ...userData, gender: event.target.value })
                    }} />
                    <Select options={[{value:'Argentina', display:'Argentina'}]} label='Country' callback={event => {
                        setUserData({ ...userData, country: event.target.value })
                    }} />
                    <Select options={[1, 2, 3, 4, 5, 6, 7].map(e=>{return {value:e, display:e}})} label='Weekly training days' callback={event => {
                        setUserData({ ...userData, training_days: event.target.value })
                    }} />

                    <div>
                        <label htmlFor='Height'>Height (cm)</label>
                        <div>
                            <input type='number' name='Height' value={userData.height} onChange={event => {
                                setUserData({ ...userData, height: event.target.value })
                            }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='Weight'>Weight (kg)</label>
                        <div>
                            <input type='number' name='Weight' value={userData.weight} onChange={event => {
                                setUserData({ ...userData, weight: event.target.value })
                            }}
                            />
                        </div>
                    </div>

                    <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div id='uploadfile'>
                            <label htmlFor='file' id='uploadLabel'>Upload a photo</label>
                            <input type='file' name='file' onChange={(event) => {
                                setImgUpdate(event.target.files[0])

                                let img = document.getElementById('upload')

                                if (!event.target.files[0]) return
                                if (event.target.files[0]?.type.includes('image')) {
                                    if (event.target.files[0]?.size >= 1000000) return alert('Max file size: 1MB')

                                    var fileReader = new FileReader();
                                    fileReader.onload = function (fileLoadedEvent) {
                                        fileReader.onloadend = () => {
                                            img.src = fileReader.result
                                            document.getElementById('uploadLabel').innerText = 'Click to change the image'
                                        }
                                    }
                                    fileReader.readAsDataURL(event.target.files[0])
                                }


                                let input = document.createElement('button')
                                input.innerText = 'X'
                                input.setAttribute('id', 'erase')
                                input.setAttribute('type', 'button')
                                input.addEventListener('click', () => {
                                    img.src = ''
                                    setImgUpdate(null)
                                    document.getElementById('options').removeChild(input)
                                    document.getElementById('uploadLabel').innerText = 'Upload a photo'
                                    event.target.value = ''
                                    return
                                })

                                if (!imgUpdate) {
                                    document.getElementById('options').append(input)
                                }
                            }} />
                            <img id='upload' src='' alt='' />
                            <div id='options'>
                                {imgUpdate
                                    ? <button type='button' id='up' onClick={(event) => { handleImage(event) }}>
                                        Upload
                                    </button>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div id='continue' onClick={(event) => {


                    setUserData({ ...userData, bmi: userData.weight / ((userData.height / 100) ** 2) })
                    console.log(userData)
                    register(dispatch, userData)
                    document.getElementById('fifthS').scrollIntoView()

                    navigate('/landing')
                    // setTimeout(() => {
                    //     navigate('/')
                    // }, 2000)
                }}>
                    Continue
                </div>
            </div>

            <div className='sequenceContainer' id='fifthS'>
                <h2>Training app</h2>
                <img src={done} alt='x' id='done' />
                <h1 id='title' style={{ marginTop: '60px' }}>Done!</h1>
                <p id='title' style={{ fontSize: '25px', color: '#6b6979' }}>You will be redirected to the homepage...</p>
            </div>
        </div>
    )
}