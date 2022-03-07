//STYLES
import S from './AccountUser.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../../components';
import NetworkContainer from './NetworkContainer/NetworkContainer';
import PasswordChange from './PasswordChange/PasswordChange';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../Redux/reducers/userLoginReducer';
import { updateUser } from '../../../Redux/apiCalls/updateUserCall/updateUserCall';

export default function AccountUser() {
	let user;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { userId, accessToken } = user = useSelector(store => store.user.currentUser);
	const { username, email } = useSelector((store) => store.user.currentUser);
	const [ state, setState ] = useState({
		username: username,
		email: email,
		newPassword: '',
		confirmPassword: '',
	});
	const [canSave, setCanSave] = useState(false);
	const [error, setError] = useState({
		username: '',
		email: '',
		newPassword: '',
		confirmPassword: '',
	})

	useEffect(() => {
		if (Object.values(error).every(error => error === '') && Object.values(state).some(field => field !== '')) setCanSave(true);
		else setCanSave(false);
	}, [state, error, setCanSave]);

	useEffect(() => {
			setError((error) =>
				!/(?=.*\d).{8,}$/.test(state.newPassword) ?
					{ ...error, newPassword: 'Must contain 8 characters and 1 number' } :
					{ ...error, newPassword: '' })
			setError((error) => 
				state.newPassword !== state.confirmPassword ?
					{ ...error, confirmPassword: 'Passwords must match.' } :
					{ ...error, confirmPassword: ''});
			setError((error) =>
				state.username.length < 5 ? 
					{ ...error, username: 'Must be at least 5 characters long.' } : 
					{ ...error, username: ''}
			)
			setError((error) =>
				!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(state.email) ?
					{ ...error, email: 'Invalid email' } :
					{ ...error, email: ''}
			);
	}, [state,setError])

	function handleInputs(event) {
		const { name, value } = event.target;
		setState({...state, [name]:value});
	}

	function handleSaveChanges(e) {
		e.preventDefault();
		updateUser(dispatch, accessToken, userId, { username: state.username, email: state.email, password: state.newPassword })
		dispatch(logoutUser(user));
		navigate('/');
	}

	return (
		<form className={S.container} autoComplete="off">
			<Input id={S.username} placeholder={username} label="Username" name="username" onChange={handleInputs} error={error.username} />
			<Input id={S.email} placeholder={email} label="E-Mail" name="email" onChange={handleInputs} error={error.email} />
			<NetworkContainer id={S.networks} />
			<PasswordChange id={S.password} handlePasswords={handleInputs} error={error} />
			<div id={S.saveChanges}>
				<button disabled={!canSave} onClick={handleSaveChanges}>
					Save Changes
				</button>
			</div>
		</form>
	);
}
