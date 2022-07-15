import { useState, useEffect, useRef } from 'react';
import { db } from '../firestore/config';

export const useCollection = (collection, _query) => {
	const [ documents, setDocuments ] = useState(null);
	const [ error, setError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	const query = useRef(_query).current;

	useEffect(
		() => {
			let ref = db.collection(collection);

			if (query) {
				ref = ref.where(...query).orderBy('createdAt', 'desc');
			}

			setIsLoading(true);
			const unsubscribe = ref.onSnapshot(
				(snapshot) => {
					const data = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data()
					}));
					setDocuments(data);
					setError(null);
					setIsLoading(false);
				},
				(err) => {
					console.log(err);
					setError(err.message);
					setIsLoading(false);
				}
			);

			return () => unsubscribe();
		},
		[ collection, query ]
	);

	return { documents, error, isLoading };
};
