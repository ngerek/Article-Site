import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firestore/config';

export const useLogin = () => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ isCancelled, setIsCancelled ] = useState(false);

	const { dispatch } = useContext(AuthContext);

	const login = async (email, password) => {
		try {
			setIsLoading(true);
			setError(null);

			const res = await auth.signInWithEmailAndPassword(email, password);

			// unmount component without error
			if (!isCancelled) {
				dispatch({ type: 'LOGIN', payload: res.user });

				setIsLoading(false);
				setError(null);
			}
		} catch (error) {
			// unmount component without error
			if (!isCancelled) {
				console.log(error.message);
				setError(error.message);
				setIsLoading(false);
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { isLoading, error, login };
};
