import ProjectCard from "./ProjectCard";
import { projectList } from "../../public/data/projectList";

export default function ProjectCards() {
    return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-16" >
       {
        projectList.map(project=>{
            return (<ProjectCard key={project.title} imgLink={project.imgLink} title={project.title} bannerTitle={project.bannerTitle} link={project.link}/>)
        })
       }
         
      </div>
    )
    
  }
  