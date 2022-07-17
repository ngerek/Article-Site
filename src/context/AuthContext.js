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
		case 'CHANGE_MODE':
			return { ...state, mode: action.payload };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(authReducer, {
		user: null,
		isAuthReady: false,
		mode: 'light'
	});

	useEffect(() => {
		const unsub = auth.onAuthStateChanged((state) => {
			dispatch({ type: 'AUTH_IS_READY', payload: state });
			unsub();
		});
	}, []);

	const changeMode = (mode) => {
		dispatch({ type: 'CHANGE_MODE', payload: mode });
	};

	console.log('authContext state:', state.user);
	console.log(state.isAuthReady);
	console.log(state.mode);

	return <AuthContext.Provider value={{ ...state, dispatch, changeMode }}>{children}</AuthContext.Provider>;
};
