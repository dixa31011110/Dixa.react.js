import React from 'react';
import { auth, provider } from '../services/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import {useAuthState} from 'react-firebase-hooks/auth';

const Login = () => {
    
   
    const handleclick=()=>{
        signInWithPopup(auth, provider)
          .then((res)=>{
            console.log(res)
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const handleLogout=()=>{
        signOut(auth).then((res)=>{
          alert("logout")
        }).catch((err)=>console.log(err))
      }
    return (
        <div>
            <GoogleButton onClick={handleclick} style={{ marginTop: "10px" }}>LogInWithGoogle</GoogleButton><hr />
            <button onClick={handleLogout}>LogOut</button><hr />
        </div>
    );
}

export default Login;
