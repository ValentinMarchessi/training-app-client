//STYLES
import S from './AccountUser.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TextInput } from '../../../components';
import NetworkContainer from './NetworkContainer/NetworkContainer';
import PasswordChange from './PasswordChange/PasswordChange';

export default function AccountUser() {
	const { username, email } = useSelector((store) => store.user.currentUser);
	const [state, setState] = useState({
		username: username,
		email: email,
	});

	const [canSave, setCanSave] = useState(false);
	const [passwordForm, setPasswordForm] = useState({
		newPassword: '',
		confirmPassword: '',
		error: '',
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
				error: 'Passwords must match!'
			}
		})
		else setPasswordForm(pwf => {
			return {
				...pwf,
				error: ''
			}
		})
	},[passwordForm.newPassword, passwordForm.confirmPassword])

	function handleTextInputs(event) {
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

	function handlePasswordInputs(event) {
		const { name, value } = event.target;
		setPasswordForm({
			...passwordForm,
			[name]: value,
		})
	}

	function handleSaveChanges() {
		
	}

	return (
		<div className={S.container}>
			<TextInput id={S.username} required placeholder={username} label="Username" name="username" onBlur={handleTextInputs} />
			<TextInput id={S.email} required placeholder={email} label="E-Mail" name="email" onBlur={handleTextInputs} />
			<NetworkContainer id={S.networks} />
			<PasswordChange id={S.password} handlePasswords={handlePasswordInputs} error={passwordForm.error} />
			<div id={S.saveChanges}>
				<button disabled={!canSave} onClick={handleSaveChanges}>Save Changes</button>
			</div>
		</div>
	);
}
