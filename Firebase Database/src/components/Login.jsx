import React from 'react';
import { auth, provider } from '../services/firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
    

    const handleclick=()=>{
        signInWithPopup(auth, provider)
          .then((res)=>{
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return (
        <div>
            <button onClick={handleclick} style={{ marginTop: "10px" }}>LogInWithGoogle</button>
        </div>
    );
}

export default Login;
