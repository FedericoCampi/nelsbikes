import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXo-0a48bNLJFmZ6zbRKU6SvOlT4hrqvY",
    authDomain: "nelsbikes-8a57e.firebaseapp.com",
    projectId: "nelsbikes-8a57e",
    storageBucket: "nelsbikes-8a57e.appspot.com",
    messagingSenderId: "528352893758",
    appId: "1:528352893758:web:78bd9d91cd6795432d6a6f",
    measurementId: "G-VS64L8HCMM"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
