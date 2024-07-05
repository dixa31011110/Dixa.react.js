// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOdWjDOzwCQYlL0ua8VyVJwGwZUSD8VoQ",
  authDomain: "auth-a219b.firebaseapp.com",
  projectId: "auth-a219b",
  storageBucket: "auth-a219b.appspot.com",
  messagingSenderId: "418828247179",
  appId: "1:418828247179:web:6c3dd423daf3aa0702b48e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();