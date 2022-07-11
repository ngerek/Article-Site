import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firestore/config';

export const useLogin = () => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const { dispatch } = useContext(AuthContext);

	const login = async (email, password) => {
		try {
			setIsLoading(true);
			setError(null);

			const res = await auth.signInWithEmailAndPassword(email, password);
			dispatch({ type: 'LOGIN', payload: res.user });

			setIsLoading(false);
			setError(null);
		} catch (error) {
			console.log(error.message);
			setError(error.message);
			setIsLoading(false);
		}
	};

	return { isLoading, error, login };
};
