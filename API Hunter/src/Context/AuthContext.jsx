import { createContext, useState } from "react";

export const AuthContext=createContext()
function AuthContextProvider({children}) {
    const [authstate,setauthstate]=useState({
        isauth:false,
        token:null
    })
     const loginUser=(token)=>
     {
        setauthstate({isauth:true,token:token})
     }
     const logoutUser=()=>
        {
           setauthstate({isauth:false,token:null})
        }
    return <AuthContext.Provider value={{authstate,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;