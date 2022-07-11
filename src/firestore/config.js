import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAPdZrUvppf21ohQTzWCg71k6sdC9j9Fak',
	authDomain: 'article-site-8f526.firebaseapp.com',
	projectId: 'article-site-8f526',
	storageBucket: 'article-site-8f526.appspot.com',
	messagingSenderId: '283764452123',
	appId: '1:283764452123:web:2787fe873fe0f8478dc1be'
};

// initialize app
firebase.initializeApp(firebaseConfig);

// initialize services
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
