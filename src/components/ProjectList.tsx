import { ParaHead, ParaText } from "../elements/HeadingText";
import {PARAHEAD_STYLE2,PARATEXT_STYLE1, PARATEXT_STYLE2} from "../constants"

type Project = {
  name: string;
  description: string[];
  technologies: string[];
};

type ExperienceData = {
  company: string;
  role: string;
  duration: string;
  projects: Project[];
}

type ProjectListProps = {
  data: ExperienceData[];
};

const ProjectList = ({data}:ProjectListProps) => {
  return (
    <div>
        {
            data.map((list,id)=>(
                <div key={id}>
                    <ParaHead mainText={list.company} styles={PARAHEAD_STYLE2}/>
                    <div>
                        {
                          list.projects.map((items,id)=>(
                            <div key={id}>
                                <ParaText mainText={items.name} styles={PARATEXT_STYLE1}/>
                                <ParaText mainText={items.description[0]} />
                                
                            </div>))

                        }
                    </div>
                    <ParaText mainText={list.duration} styles={PARATEXT_STYLE2}/>
                </div>
            ))


        }
    </div>
  )
}

export default ProjectList