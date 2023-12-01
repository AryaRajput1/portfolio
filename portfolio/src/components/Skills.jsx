import axios from "axios";
import Skill from "./Skill";
import { useEffect, useState } from "react";
export default function Skills() {
  const [skillList,setSkillList]= useState([]);
  useEffect(()=>{
    (async ()=>{
      try{
        const {data}=await axios.get('https://portfolio-b-vqho.onrender.com/api/skills?populate=*')
        const projects = data?.data?.map(dataItem=>{
          return {...dataItem.attributes,
            imgLink:dataItem.attributes?.image?.data?.attributes?.url
          }
        })
        setSkillList(projects)
      }catch(e){
        console.log(e);
      }
    })()
  },[])
  return (
    <div className="font-serif px-8 pb-16 mx-4 flex flex-col items-center" id="#project">
        <div className="group inline-block">
        <h2 className="font-serif font-bold text-green-700 text-3xl mb-1 tracking-wid">Skills</h2>
        <div className="h-2 bg-green-700 mx-8 group-hover:mx-0 duration-500 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center w-full mt-12 gap-6 max-w-xl flex-wrap">
         {
            skillList.map((skill) =><Skill key={skill.imgLink} imgLink={skill.imgLink} title={skill.name}/>)
         }
        </div>
    </div>
  )
  
}
