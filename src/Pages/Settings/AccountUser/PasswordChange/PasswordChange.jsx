import { useState } from 'react';
import { TextInput } from '../../../../components';

export default function PasswordChange({handlePasswords, error}) {
	const [active, setActive] = useState(false)

	const PasswordFields = (
		<>
			<TextInput name="newPassword" label="New Password" onBlur={handlePasswords} type="password" />
			<TextInput name="confirmPassword" label="Confirm Password" onBlur={handlePasswords} type="password" error={error} />
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