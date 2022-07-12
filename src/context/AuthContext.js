import { createContext, useReducer, useEffect } from 'react';
import { auth } from '../firestore/config';

export const AuthContext = createContext();

const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, user: action.payload };
		case 'LOGOUT':
			return { ...state, user: null };
		case 'AUTH_IS_READY':
			return { ...state, user: action.payload, isAuthReady: true };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(authReducer, {
		user: null,
		isAuthReady: false
	});

	useEffect(() => {
		const unsub = auth.onAuthStateChanged((state) => {
			dispatch({ type: 'AUTH_IS_READY', payload: state });
			unsub();
		});
	}, []);

	console.log('authContext state:', state.user);
	console.log(state.isAuthReady);

	return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
