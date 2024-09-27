import { NAVBARDATA } from "../constants"
import { generateUniqueId } from "../utlity/globalFunctions"
import "../assets/styles/navpage.scss"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navpage-parent">
      <div className="navbar-name">Mohamed Ashik <span>FRONTEND DEVELOPER</span></div>
      <div className="navitems-list">
        {NAVBARDATA.map((pages,pageId)=>(<div key={generateUniqueId(pageId)}>{pages}</div>))}
      </div>
      <div className="mob-icon hide"><GiHamburgerMenu fontSize={24}/> </div>
    </div>
  )
}

export default Navbar