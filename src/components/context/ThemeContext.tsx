import {createContext} from 'react'
import { theme } from '../theme'

type contextProvider ={
    children:React.ReactNode
}
export const themeContext = createContext(theme) 


export const ThemeContext = ({children}:contextProvider) => {

    
  return (
    <themeContext.Provider  value={theme}>{children}</themeContext.Provider>
  )
}
