import { useState, useContext } from 'react';
import { useLogin } from '../../hooks/useLogin';

import { AuthContext } from '../../context/AuthContext';

// styles
import './Login.css';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const { mode } = useContext(AuthContext);

	const { login } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();

		login(email, password);
	};

	return (
		<form className={`login-form ${mode}`} onSubmit={handleSubmit}>
			<h2>Login</h2>

			<label>
				<span>email:</span>
				<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
			</label>

			<label>
				<span>password:</span>
				<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
			</label>

			<button className="btn">Login</button>
		</form>
	);
};

export default Login;
