import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { Timestamp } from "firebase/firestore";
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1ChokC6SyjEiIUU4iY-uBI7vBxoVSfEE",
    authDomain: "markandgaea.firebaseapp.com",
    projectId: "markandgaea",
    storageBucket: "markandgaea.appspot.com",
    messagingSenderId: "592245000498",
    appId: "1:592245000498:web:cb6d8d6846dbb91d886f2b"
};

//init firebase
const app = initializeApp(firebaseConfig);

/* services */
//init firestore
export const db = getFirestore(app); 

//init storage
export const storage = getStorage(app);

//init auth
export const auth = getAuth(app);

//functions
export const functions = getFunctions(app);

// timestamp
export const timestamp = Timestamp;