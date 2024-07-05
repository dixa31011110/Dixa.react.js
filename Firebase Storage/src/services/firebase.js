// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDotrBNlXU78oxbSpMIORLXltobUOz0Fzg",
  // authDomain: "demoauth-356cf.firebaseapp.com",
  // projectId: "demoauth-356cf",
  // storageBucket: "demoauth-356cf.appspot.com",
  // messagingSenderId: "29873661388",
  // appId: "1:29873661388:web:8ca3119c83f42319cca969"
  apiKey: "AIzaSyBZxYKDe52VHt5M4-iUmaNjuVxbiHh61tk",
  authDomain: "firestore-demo-23f9e.firebaseapp.com",
  projectId: "firestore-demo-23f9e",
  storageBucket: "firestore-demo-23f9e.appspot.com",
  messagingSenderId: "828892774915",
  appId: "1:828892774915:web:dacdffede5e37324bb8436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider = new GoogleAuthProvider();

export const db=getFirestore(app);