import { useState } from 'react';
import { TextInput } from '../../../../components';

export default function PasswordChange({handlePasswords, error}) {
	const [active, setActive] = useState(false)

	const PasswordFields = (
		<>
			<TextInput name="newPassword" label="New Password" required={true} onChange={handlePasswords} type="password" error={error.newPasswordError}/>
			<TextInput name="confirmPassword" label="Confirm Password" required={true} onChange={handlePasswords} type="password" error={error.conPasswordError} />
		</>
	);

	const ChangePasswordButton = (
		<button onClick={() => setActive(true)}>Change Password</button>
	)

    return (
		<>
			{active ? PasswordFields : ChangePasswordButton}
		</>
	);
}