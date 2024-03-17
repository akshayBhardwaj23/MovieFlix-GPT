// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "movieflix-gpt-42247.firebaseapp.com",
  projectId: "movieflix-gpt-42247",
  storageBucket: "movieflix-gpt-42247.appspot.com",
  messagingSenderId: "89387631691",
  appId: "1:89387631691:web:a99546511a29e73fadb9ce",
  measurementId: "G-8RB2CGBD4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
