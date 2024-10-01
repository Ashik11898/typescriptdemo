import ProjectList from "../components/ProjectList"
import { HeadingText } from "../elements/HeadingText"
import { RESUMEOBJECT } from "../constants"

const ProjectsPage = () => {
  let {experience} =RESUMEOBJECT


  return (
   <>
    <HeadingText mainText="12 YEARS OF" subText="EXPERIENCE"/>
    <ProjectList data={experience}/>
   </>
  )
}

export default ProjectsPage