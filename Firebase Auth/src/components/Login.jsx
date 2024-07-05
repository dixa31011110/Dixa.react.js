import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../service/firebase';

const Login = () => {

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()

        //firebase email-password//
        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

  return (
    <div>
        <h1>Log-in Form</h1>
        <form action="" onSubmit={handlesubmit}>
            <input onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Email' />
            <input onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='password' />
            <input type="submit" />
        </form>
    </div>
  );
}

export default Login;
