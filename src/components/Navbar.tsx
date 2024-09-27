import { NAVBARDATA } from "../constants"
import { generateUniqueId } from "../utlity/globalFunctions"
import "../assets/styles/navpage.scss"

const Navbar = () => {
  return (
    <div className="navpage-parent">
      <div className="navbar-name">Mohamed Ashik <span>/ FRONTEND DEVELOPER</span></div>
      <div className="navitems-list">{NAVBARDATA.map((pages,pageId)=>(<div key={generateUniqueId(pageId)}>{pages}</div>))}</div>
    </div>
  )
}

export default Navbar