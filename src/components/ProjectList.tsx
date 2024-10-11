import { ParaHead, ParaText } from "../elements/HeadingText";
import {PARAHEAD_STYLE2,PARATEXT_STYLE1, PARATEXT_STYLE2,PARAHEAD_RESPONSIVE} from "../constants"
import { useState,useEffect } from "react";

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

  const [width, setWidth] = useState(window.innerWidth);

console.log("width",width);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
        {
            data.map((list,id)=>(
                <div key={id}>
                    <ParaHead mainText={list.company} styles={width > 1079 ? PARAHEAD_STYLE2:PARAHEAD_RESPONSIVE}/>
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