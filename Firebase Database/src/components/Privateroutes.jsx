import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Privateroutes = ({children}) => {
  const [user]=useAuthState(auth)


    
    if(!user){
        return <Navigate to={"/login"} />
            
    }

  return children 
}

export default Privateroutes;
