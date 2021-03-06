import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_Key,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN_URL,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectid: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: "G-45N6ZTC98X"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database}

