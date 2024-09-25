import {useContext} from 'react'
import {userContext} from "../context/AuthContext"
const DisplayAuthUser = () => {

const userAuth =useContext(userContext)

const handleLogin=()=>{
   
    userAuth.setUser({
        name:"salla",
        email:"salla@gmail.com"
    })
}
console.log("userAuth:",userAuth.user);
const handleLogout=()=>{
    userAuth?.setUser(null)
}

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default DisplayAuthUser