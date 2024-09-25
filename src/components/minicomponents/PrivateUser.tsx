import React from 'react'
import {Optprops} from '../props/OptionalProps'

type PrivateUserTypes ={
    isLoggedIn:boolean
    component :React.ComponentType<Optprops>
}


const PrivateUser = ({isLoggedIn,component:Component}:PrivateUserTypes) => {
  
    if(isLoggedIn){
        return <Component name="nick" count={100}/>
    }
    else{
        return <>pls login</>
    }
  
}

export default PrivateUser