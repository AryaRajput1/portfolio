import axios from "axios";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { useState } from "react";

export default function ProjectCards() {
  const [projectList,setProjectList]= useState([]);
  const fetchProjects = async ()=>{
    
  }
  useEffect(()=>{
    (async ()=>{
      try{
        const {data}=await axios.get('https://portfolio-b-vqho.onrender.com/api/projects?populate=*&sort=priority:desc')
        const projects = data?.data?.map(dataItem=>{
          return {...dataItem.attributes,
            imgLink:dataItem.attributes?.image?.data?.attributes?.url
          }
        })
        setProjectList(projects)
      }catch(e){
        console.log(e);
      }
    })()
  },[])
    return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-16" >
       {
        projectList?.map(project=>{
            return (<ProjectCard key={project?.name} imgLink={project?.imgLink || ''} title={project?.name} bannerTitle={project?.bannerTitle || ''} link={project?.url}/>)
        })
       }
         
      </div>
    )
    
  }
  