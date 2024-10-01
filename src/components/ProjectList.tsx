import { ParaHead, ParaText } from "../elements/HeadingText";

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
                    <ParaHead mainText={list.company}/>
                    <div>
                        {
                        list.projects.map((items,id)=>(
                            <div key={id}>
                                <ParaText mainText={items.project_name} />
                                <ParaText mainText={items.project_desc} />
                            </div>))
                        }
                    </div>
                    <div>{list.year}</div>
                </div>
            ))
        }
    </div>
  )
}

export default ProjectList