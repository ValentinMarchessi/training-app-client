//STYLES
import S from './AccountUser.module.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from '../../../components';
import NetworkContainer from './NetworkContainer/NetworkContainer';
import PasswordChange from './PasswordChange/PasswordChange';
import { updateUser } from '../../../Redux/apiCalls/updateUserCall/updateUserCall';
import { logoutUser } from '../../../Redux/reducers/userLoginReducer';
import { useNavigate } from 'react-router-dom';

export default function AccountUser() {

	const dispatch = useDispatch()

	const navigate=useNavigate()//

	let user
	const { username, email, userId, accessToken } = user = useSelector((store) => store.user.currentUser);
	const [state, setState] = useState({
		username: username,
		email: email,
	});

	const [canSave, setCanSave] = useState(false);
	const [passwordForm, setPasswordForm] = useState({
		newPassword: '',
		confirmPassword: '',
		newPasswordError: '',
		conPasswordError:'',
	});

	useEffect(() => {
		console.log(state);
		if (state.username !== username || state.email !== email || (!passwordForm.error && passwordForm.newPassword)) setCanSave(true);
		else setCanSave(false);
	}, [state, username, email, setCanSave, passwordForm]);

	useEffect(() => {
		if (passwordForm.newPassword !== passwordForm.confirmPassword) setPasswordForm(pwf => {
			return {
				...pwf,
				conPasswordError: 'Passwords must match!'
			}
		})
		else setPasswordForm(pwf => {
			return {
				...pwf,
				conPasswordError: ''
			}
		})
	},[passwordForm.newPassword, passwordForm.confirmPassword])

	function handleInputs(event) {
		const { name, value } = event.target;
		if (name === 'username')
			setState({
				...state,
				username: value || username,
			});
		if (name === 'email')
			setState({
				...state,
				email: value || email,
			});
	}

	function validateInputs(event){
		const { name, value } = event.target;
		console.log(username===state.username)
		if(name==='newPassword')
			setPasswordForm(
				value?!/(?=.*\d).{8,}$/.test(value)
				?{...passwordForm, newPasswordError: 'Must contain 8 characters and 1 number'}
				:{...passwordForm, newPasswordError: '', newPassword: value, }
				:{...passwordForm}
			)
		if(name==='confirmPassword')
			setPasswordForm({
				...passwordForm, confirmPassword: value
			})
		if(name==='username')
			setState(
				value?value.length<5
				?{...state, usernameError: 'Must contain at least 5 characters'}
				:{...state, usernameError: '', username:value}
				:{...state, usernameError: '', username:username}
			)
		if(name==='email')
			setState(
				value?!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
				?{...state, emailError: 'Invalid email'}
				:{...state, emailError: '', email: value}
				:{...state, emailError: ''}
			)
	}

	function handleSaveChanges() {
		updateUser(dispatch, accessToken, userId, {username:state.username, email:state.email, password:passwordForm.newPassword})
		dispatch(logoutUser(user))
		navigate('/')
	}

	return (
		<form className={S.container} autoComplete='off'>
			<Input id={S.username} placeholder={username} label="Username" name="username" onBlur={handleInputs} />
			<Input id={S.email} placeholder={email} label="E-Mail" name="email" onBlur={handleInputs} />
			<NetworkContainer id={S.networks} />
			<PasswordChange id={S.password} handlePasswords={validateInputs} error={passwordForm} />
			<div id={S.saveChanges}>
				<button disabled={!canSave} onClick={handleSaveChanges}>Save Changes</button>
			</div>
		</form>
	);
}
