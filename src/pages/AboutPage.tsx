import {HeadingText, ParaText, WorkInfo,} from "../elements/HeadingText"
import ProjectsPage from "./ProjectsPage"

const AboutPage = () => {
  const HEADTEXT = "FRONTENED"
  const SUBTEXT ="DEVELOPER"
  const PARATEXT = "Passionate about building dynamic and engaging web interfaces. I specialize in turning concepts into pixel-perfect, responsive designs using modern frameworks like React and Next.js. With a focus on clean code, performance optimization, and seamless user experiences, I transform ideas into polished, user-friendly products that bring value to users."


  return (
    <div className='about-parent'>
       <HeadingText mainText={HEADTEXT} subText={SUBTEXT}/>
       <ParaText mainText={PARATEXT}/>
       <WorkInfo/>
       <div style={{marginTop:"120px"}}><ProjectsPage/></div>
    </div>
  )
}

export default AboutPage