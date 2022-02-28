import { useState } from 'react';
import { Input } from '../../../../components';

export default function PasswordChange({handlePasswords, error}) {
	const [active, setActive] = useState(false)

	const PasswordFields = (
		<>
			<Input name="newPassword" label="New Password" onBlur={handlePasswords} type="password" />
			<Input name="confirmPassword" label="Confirm Password" onBlur={handlePasswords} type="password" error={error} />
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