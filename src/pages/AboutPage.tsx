import ProfileCard from "../components/ProfileCard"
import {RESUMEOBJECT} from "../constants"

const AboutPage = () => {
  const {description}=RESUMEOBJECT

  return (
    <div className='about-parent'>
      <div className='about-left-block'>
        <ProfileCard/>
      </div>
      <div className="about-right-block">
        <h2>Hello</h2>
        <p>{description}</p>
        <div style={{display:"flex"}}> 
          <button>Resume</button>
          <button>Projects</button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage