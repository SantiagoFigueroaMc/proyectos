// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjqvCV0_JRSkvVg51KN2XyJmeaeLRaWbc",
    authDomain: "fb-auth-demo-29dfa.firebaseapp.com",
    projectId: "fb-auth-demo-29dfa",
    storageBucket: "fb-auth-demo-29dfa.appspot.com",
    messagingSenderId: "387295723061",
    appId: "1:387295723061:web:c659a54307d6b12a1cfb7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);