import ProjectList from "../components/ProjectList"
import { HeadingText } from "../elements/HeadingText"
import { RESUMEOBJECT } from "../constants"

const ProjectsPage = () => {
  let {experience,total_experience} =RESUMEOBJECT

  let textconcadinate = total_experience +" YEARS OF"

  return (
   <>
    <HeadingText mainText={textconcadinate} subText="EXPERIENCE"/>
    <ProjectList data={experience}/>
   </>
  )
}

export default ProjectsPage