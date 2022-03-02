import { useState } from 'react';
import { Input } from '../../../../components';

export default function PasswordChange({handlePasswords, error}) {
	const [active, setActive] = useState(false)

	const PasswordFields = (
		<>
			<Input name="newPassword" label="New Password" onChange={handlePasswords} type="password" error={error?.newPassword} />
			<Input name="confirmPassword" label="Confirm Password" onChange={handlePasswords} type="password" error={error?.confirmPassword} />
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