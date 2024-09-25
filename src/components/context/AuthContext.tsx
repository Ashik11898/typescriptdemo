import { createContext,useState } from "react";

type AuthWrap = {
    children:React.ReactNode
}

type AuthProps = {
   name:string
   email:string
}

type UserContextType ={
    user:AuthProps | null
    setUser:React.Dispatch<React.SetStateAction<AuthProps | null>>
}



export const userContext = createContext({} as UserContextType)

export const AuthWrapFunc =({children}:AuthWrap)=>{
    const[user,setUser] = useState<AuthProps | null>(null)
    return <userContext.Provider value={{user,setUser}}> {children}</userContext.Provider>
}