import "../assets/styles/navpage.scss"
import { LuHome } from "react-icons/lu";
import { PiSuitcase } from "react-icons/pi";
import { LuFolder } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";
import { RiContactsFill } from "react-icons/ri";
import {ICONDETAILS} from "../constants"






const Navbar = () => {
 

 


  return (
    
    <div className="navpage-parent">
      <div className="navpage-parent-block">
          <div><LuHome color={ICONDETAILS.color2} size={ICONDETAILS.size}/></div>
          <div><PiSuitcase color={ICONDETAILS.color2} size={ICONDETAILS.size}/></div>
          <div><LuFolder color={ICONDETAILS.color2} size={ICONDETAILS.size}/></div>
          <div><VscTools color={ICONDETAILS.color2} size={ICONDETAILS.size}/></div>
          <div><RiContactsFill color={ICONDETAILS.color2} size={ICONDETAILS.size}/></div>
      </div>
      
    </div>
    
  )
}

export default Navbar