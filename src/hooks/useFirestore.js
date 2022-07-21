import { useReducer, useState, useEffect } from 'react';
import { db, timestamp } from '../firestore/config';

const initialState = {
	isLoading: false,
	error: null,
	success: null
};

const firestoreReducer = (state, action) => {
	switch (action.type) {
		case 'IS_LOADING':
			return { ...state, isLoading: true };
		case 'ADDED_DOCUMENT': {
			return { isLoading: false, error: null, success: true };
		}
		case 'DELETED_DOCUMENT':
			return { isLoading: false, error: null, success: null };
		case 'ERROR':
			return { isLoading: false, error: action.payload, success: true };
		default:
			return state;
	}
};

export const useFirestore = (collection) => {
	const [ state, dispatch ] = useReducer(firestoreReducer, initialState);
	const [ isCancelled, setIsCancelled ] = useState(false);

	// collection ref
	const ref = db.collection(collection);

	const addDocument = async (doc) => {
		try {
			dispatch({ type: 'IS_LOADING' });
			await ref.add({ ...doc, createdAt: timestamp });

			if (!isCancelled) {
				dispatch({ type: 'ADDED_DOCUMENT' });
			}
		} catch (error) {
			if (!isCancelled) {
				dispatch({ type: 'ERROR', payload: error.message });
			}
		}
	};

	const deleteDocument = async (id) => {
		dispatch({ type: 'IS_LOADING' });

		try {
			await ref.doc(id).delete();
			if (!isCancelled) {
				dispatch({ type: 'DELETED_DOCUMENT' });
			}
		} catch (error) {
			if (!isCancelled) {
				dispatch({ type: 'ERROR', payload: error.message });
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { addDocument, deleteDocument, state };
};
