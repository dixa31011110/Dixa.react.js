import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../services/firebase';
import GoogleButton from 'react-google-button'
import { useAuthState } from 'react-firebase-hooks/auth';



const Login = () => {

  
  const handleclick = () => {
    signInWithPopup(auth, provider)
      .then((res)=>{
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout=()=>{
    signOut(auth).then((res)=>{
      alert("logout")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
   
    //  <div className='home-logout'>
    //   <GoogleButton onClick={handleclick} style={{ marginTop: "10px" }}>LoginWithGoogle</GoogleButton>
      <div className='home-logout'>
        

        <button className='home-logout-btn'  style={{ textDecoration: "none", fontSize: "28px", color: "white", fontFamily: "Poppins,sans-serif" }} onClick={handleLogout}>LogOut</button>
        <GoogleButton  onClick={handleclick} style={{ marginTop: "10px" }}>LoginWithGoogle</GoogleButton>
      
      </div>
    //</div>
  
  );
}

export default Login;
