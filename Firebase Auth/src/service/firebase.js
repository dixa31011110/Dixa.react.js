// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6925syBD0eCv4SomMkd3i4MEnaax5Xb8",
  authDomain: "auth-f0349.firebaseapp.com",
  projectId: "auth-f0349",
  storageBucket: "auth-f0349.appspot.com",
  messagingSenderId: "884436761801",
  appId: "1:884436761801:web:c13824b495921a88d42118",
  measurementId: "G-ZDTFZLS05T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
const analytics = getAnalytics(app);