import { useState,useRef } from "react";
import { NAVBARDATA } from "../constants"
import { GiHamburgerMenu } from "react-icons/gi";
import useOutsideClick from "../hooks/useOutsideClick";
import "../assets/styles/navpage.scss"

const Navbar = () => {
  const [navList,setNavList] =useState(NAVBARDATA)
  const [navPopup,setNavpop] =useState(false)
  const closeRef = useRef(null);

  const openNavItems =(e:React.MouseEvent<HTMLDivElement>)=>{
    e.preventDefault();
    setNavpop(!navPopup)
  }



  useOutsideClick(closeRef, () => {setNavpop(false)})


  return (
    
    <div className="navpage-parent" ref={closeRef}>
      <div className="navbar-name" onClick={(e)=>{openNavItems(e)}}>Mohamed Ashik <span>FRONTEND DEVELOPER</span></div>
      <div className={`navitems-list ${navPopup ? "enable":""}`}>
        {navList.map((pages)=>(<div key={pages.id} className={`navitems ${pages.isactive ? "active":""}`} >{pages.pagename}</div>))}
      </div>
      <div className="mob-icon hide" onClick={(e)=>{openNavItems(e)}}><GiHamburgerMenu fontSize={24}/> </div>
    </div>
    
  )
}

export default Navbar