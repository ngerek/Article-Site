import { useState, useEffect } from 'react';
import { db } from '../firestore/config';

export const useDocument = (collection, id) => {
	const [ document, setDocument ] = useState(null);
	const [ error, setError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const unsubscribe = db.collection(collection).doc(id).onSnapshot(
			(doc) => {
				if (!doc.exists) {
					setIsLoading(false);
					throw new Error('Could not find article to load');
				} else {
					setDocument(doc.data());
					setIsLoading(false);
					setError(null);
				}
			},
			(err) => {
				setIsLoading(false);
				setError(err.message);
			}
		);

		return () => unsubscribe();
	}, []);

	return { document, error, isLoading };
};
