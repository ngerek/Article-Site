import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// styles
import './Signup.css';

const Signup = () => {
	const [ username, setUserName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const { signup } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();

		signup(username, email, password);
	};

	return (
		<form className="signup-form" onSubmit={handleSubmit}>
			<h2>Signup</h2>
			<label>
				<span>username:</span>
				<input type="text" onChange={(e) => setUserName(e.target.value)} value={username} required />
			</label>

			<label>
				<span>email:</span>
				<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
			</label>

			<label>
				<span>password:</span>
				<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
			</label>

			<button className="btn">Signup</button>
		</form>
	);
};

export default Signup;
