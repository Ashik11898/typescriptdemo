import {useEffect,useRef,useState} from "react"
import { ParaHead, ParaText } from "../elements/HeadingText"
import { PiTwitterLogoBold } from "react-icons/pi";
import { PiInstagramLogoBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import {ICONDETAILS,PARAHEAD_STYLE1} from "../constants"

type ProfileProps={
  name:string,
  subdesc:string
}

const ProfileCard = ({name,subdesc}:ProfileProps) => {

  const [windowInnerht,setWindowInnerht]=useState<number | null>(null)
  const profileBlock = useRef(null)

  useEffect(() => {
   setWindowInnerht(window.innerHeight)
  }, [])

console.log("w",windowInnerht);


  return (
    <div className='profile-parent'   style={{ height: windowInnerht !== null && windowInnerht > 580 ? "550px" : "" }}>
      <div className='profile-imgblock'></div>
      <div className='profile-name'><ParaHead mainText={name}/></div>
      <div className='profile-subdesc'><ParaText mainText={subdesc}/></div>
      <div className='profile-icons'>
        <PiTwitterLogoBold color={ICONDETAILS.color} size={ICONDETAILS.size}/>
        <PiInstagramLogoBold color={ICONDETAILS.color} size={ICONDETAILS.size}/>
        <MdOutlineMailOutline color={ICONDETAILS.color} size={ICONDETAILS.size}/>
        <AiOutlineLinkedin color={ICONDETAILS.color} size={ICONDETAILS.size}/>
        
      </div>
      
    </div>
  )
}

export default ProfileCard