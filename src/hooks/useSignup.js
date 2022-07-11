import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firestore/config';

export const useSignup = () => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const { dispatch } = useContext(AuthContext);

	const signup = async (username, email, password) => {
		try {
			setIsLoading(true);
			setError(null);
			const res = await auth.createUserWithEmailAndPassword(email, password);

			await res.user.updateProfile({ displayName: username });

			dispatch({ type: 'LOGIN', payload: res.user });

			setIsLoading(false);
			setError(null);
		} catch (error) {
			console.log(error.message);
			setIsLoading(false);
			setError(error.message);
		}
	};

	return { isLoading, error, signup };
};
