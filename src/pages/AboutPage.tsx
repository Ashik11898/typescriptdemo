import {HeadingText, ParaText, WorkInfo,} from "../elements/HeadingText"
import ProjectsPage from "./ProjectsPage"
import { RESUMEOBJECT } from "../constants"
import ContactPage from "./ContactPage"

const AboutPage = () => {

  const {role=[],desc}= RESUMEOBJECT
  const STYLES ={marginTop:"120px"}

  return (
    <div className='about-parent'>
       <HeadingText mainText={role[0].toUpperCase()} subText={role[role.length -1].toUpperCase()}/>
       <ParaText mainText={desc}/>
       <WorkInfo/>
       <div style={STYLES}><ProjectsPage/></div>
       <ContactPage/>
    </div>
  )
}

export default AboutPage