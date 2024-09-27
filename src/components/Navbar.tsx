import { useState } from "react";
import { NAVBARDATA } from "../constants"
import { generateUniqueId } from "../utlity/globalFunctions"
import "../assets/styles/navpage.scss"
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [navPopup,setNavpop] =useState(false)
  
  const openNavItems =(e:React.MouseEvent<HTMLDivElement>)=>{
    e.preventDefault();
    setNavpop(!navPopup)
    console.log("test1");
    
  }


  return (
    <div className="navpage-parent">
      <div className="navbar-name">Mohamed Ashik <span>FRONTEND DEVELOPER</span></div>
      <div className={`navitems-list ${navPopup ? "enable":""}`}>
        {NAVBARDATA.map((pages,pageId)=>(<div key={generateUniqueId(pageId)}>{pages}</div>))}
      </div>
      <div className="mob-icon hide" onClick={(e)=>{openNavItems(e)}}><GiHamburgerMenu fontSize={24}/> </div>
    </div>
  )
}

export default Navbar