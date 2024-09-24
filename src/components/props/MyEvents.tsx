import { useState,useContext } from "react"
import { themeContext } from "../context/ThemeContext"

type GetClick = {
    onClick ?:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
    myStyles?: React.CSSProperties
}

type UserType = {
    name:string
    email:string

}

export const MyEvents = (props:GetClick) => {
  return (
    <button onClick={(event)=>props.onClick?.(event,1)}>Mouse event</button>
  )
}


export const MyChangeEvents = () => {
    const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
    }

    return (
      <input onChange={handleChange}/>
    )
}


export const StyleProperty = (props:GetClick) => {
    return (
      <button style={props.myStyles}>Style props</button>
    )
  }



export const Login = () => {
  const[isLoggedIn,setIsloggedIn]=useState<UserType>({} as UserType)
  const theme = useContext(themeContext)

  const handleLogin =()=>{
    setIsloggedIn({
      name:"salla",
      email:"salla@gmail.com"
    })
  }

  const handleOut =()=>{
    setIsloggedIn({
      name:"",
      email:""
    })
  }

  console.log("isLoggedIn",isLoggedIn);
  
  return (
    <div>
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleOut}>Log out</button>
        <div style={{color:theme.text}}>{isLoggedIn.name ? isLoggedIn.name+ ": you logged in":"please login user"}</div>
    </div>
  )
}
  


  

