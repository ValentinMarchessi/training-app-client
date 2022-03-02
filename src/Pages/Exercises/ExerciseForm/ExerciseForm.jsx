import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ExerciseForm.module.scss';
import { createExercises } from '../../../Redux/apiCalls/exercisesCall/createExercises';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import app from '../../../firebase/config-firestore/firabase'

const testingState = {
	title: 'Burpee',
	description: 'Mix of jumping jacks and push ups, an excelent whole body exercise.',
	video: 'youtubeURL',
};

export default function ExerciseForm({onAdd, onClose}) {
	const [form, setForm] = useState({
		title: null, //string
		description: null, //number
		video: null, //string
	});

	const [error, setError] = useState({});

	const dispatch = useDispatch();
	const user = useSelector((store) => store.user.currentUser);

	function handleInput(event) {
		const { name, value } = event.target;
		setError({...error, [name]:value===''?`Please include a ${name}`:''})

		let submit=document.getElementById(style.submit)

		let incomplete = Array.from(document.getElementsByClassName('exerciseInputs')).filter(e=>e.value==='')
		console.log("incomplete: ", incomplete)
		if (incomplete.length) {
			submit.disabled=true
			submit.style.opacity=0.5
			submit.innerText='Please complete the form'
		} else {
			submit.disabled=false
			submit.style.opacity=1
			submit.innerText='Submit'
		}
		if(name!=='video') setForm({
			...form,
			[name]: value,
		});
	}

	useEffect(()=>{
		console.log('errors: ',error)
		
	},[error, form])

	useEffect(()=>{
		console.log(form)
		if(Object.values(form).filter(e=>e===null).length===0) {
			console.log(Object.values(form))
			createExercises(dispatch, { userId: user.userId, token: user.accessToken, body: form });
			onAdd();
		}
	},[form])

	const [videosrc, setSrc]=useState('')

	function handleSubmit(event) {
		event.preventDefault();
		if(!Object.values(error).filter(e=>e!=='').length) handleVideo(event)
	}

	const [videoUpdate, setVideoUpdate] = useState()

	const handleVideo = (e) => {
        e.preventDefault()
        let preventSubmit=document.getElementById(style.submit)
        preventSubmit.disabled='true'
		preventSubmit.style.opacity=.2
		preventSubmit.innerText='Uploading...'
		preventSubmit.style.cursor='progress'
		document.getElementsByTagName('html')[0].style.cursor='progress'

        const fileName = new Date().getTime() + videoUpdate.name

        const storage = getStorage(app)

        const storageRef = ref(storage, fileName)

        const uploadTask = uploadBytesResumable(storageRef, videoUpdate);

        uploadTask.on('state_changed',
            (snapshot) => {
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
            (error) => {},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log(downloadURL)
					///if(downloadURL)
					setForm({
						...form,
						video: downloadURL
					})
					console.log(downloadURL)
                    preventSubmit.disabled=false
                    preventSubmit.style.opacity=1
                    preventSubmit.innerText='Done'
                    preventSubmit.style.cursor='pointer'
                    document.getElementsByTagName('html')[0].style.cursor='default'
					
					if (Object.values(error).every(e => e === '')) {
						console.log(form, user.userId, user.accessToken);
						createExercises(dispatch, { userId: user.userId, token: user.accessToken, body: form });
						onAdd();
					}
                });
            })
    }

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<label htmlFor="title">Title</label>
			<input name="title" type="text" className='exerciseInputs' onChange={handleInput} />
			<span>{error.title}</span>
			<label htmlFor="description">Description</label>
			<textarea name="description" className='exerciseInputs' style={{resize:'vertical'}} onChange={handleInput}></textarea>
			<span>{error.description}</span>
			<label htmlFor="video">Video</label>

			<div id='videoholder'>
				<input name="video" className='exerciseInputs' content='click to add a video' type="file" onChange={(event)=>{
					let file=event.target.files[0]
					console.log(event.target.files[0])
					if(file?.type.includes('video')&&file.size<=5000000){
						var fileURL = URL.createObjectURL(file);
						console.log(fileURL)
						handleInput(event)
						setVideoUpdate(file)
						setSrc(fileURL)

						let input = document.createElement('button')
						input.innerText = 'Remove'
						input.setAttribute('id', 'erase')
						input.setAttribute('type', 'button')
						input.setAttribute('title', 'Remove video')
						input.addEventListener('click', () => {
							setSrc('')
							event.target.value = ''
							setVideoUpdate('')
							handleInput(event)
							document.querySelector("input[type='file']").setAttribute('content', 'Click to upload a video')
							return input.remove()
						})
						document.getElementById('videoholder').append(input)

						return document.querySelector("input[type='file']").setAttribute('content', 'Click to change the video')
					}
					document.querySelector("input[type='file']").setAttribute('content', file.size>5000000?'Max video size: 5MB':!file.type.includes('video')?'Please upload a video':'Click to change the video')
					setSrc('')
				}}/>

				{videosrc
					?<video src={videosrc} id='exerciseVideo' name='preview' onDurationChange={(event)=>{
						if(event.target.duration>60) {
							setSrc(null)
							setVideoUpdate('')
							document.querySelector('input[name="video"]').value=''
							document.querySelector("input[type='file']").setAttribute('content', 'Your video length must be less than 20s')
							event.target.value=''
							event.target.name='video' // Para aprovechar el handleInput
							handleInput(event)
						}
					}} controls/>
					:null
				}
			</div>
			<span>{error.video}</span>
			
			<button id={style.submit} type="submit">Please complete the form</button>
		</form>
	);
}
