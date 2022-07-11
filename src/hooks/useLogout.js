import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firestore/config';

export const useLogout = () => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const { dispatch } = useContext(AuthContext);

	const logout = async () => {
		try {
			setIsLoading(true);
			setError(null);

			await auth.signOut();
			dispatch({ type: 'LOGOUT' });

			setIsLoading(false);
			setError(null);
		} catch (error) {
			console.log(error.message);
			setError(error.message);
			setIsLoading(false);
		}
	};

	return { isLoading, error, logout };
};
