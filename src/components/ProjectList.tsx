import { ParaHead, ParaText } from "../elements/HeadingText";
import {PARAHEAD_STYLE2,PARATEXT_STYLE1, PARATEXT_STYLE2} from "../constants"

type Project = {
    project_desc: string;
    project_name: string;
    tools: string[];
  };
  
  type Experience = {
    company: string;
    projects: Project[];
    year: string;
    id:number;
  };
  
  type ExperienceData = {
    data: Experience[];
  };
  

const ProjectList = ({data}:ExperienceData) => {
  return (
    <div>
        {
            data.map((list)=>(
                <div key={list.id}>
                    <ParaHead mainText={list.company} styles={PARAHEAD_STYLE2}/>
                    <div>
                        {
                        list.projects.map((items,id)=>(
                            <div key={id}>
                                <ParaText mainText={items.project_name} styles={PARATEXT_STYLE1}/>
                                <ParaText mainText={items.project_desc} />
                            </div>))
                        }
                    </div>
                    <ParaText mainText={list.year} styles={PARATEXT_STYLE2}/>
                </div>
            ))
        }
    </div>
  )
}

export default ProjectList