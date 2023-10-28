import { skillList } from "../../public/data/projectList";
import Skill from "./Skill";
export default function Skills() {
  return (
    <div className="font-serif px-8 pb-16 mx-4 flex flex-col items-center" id="#project">
        <div className="group inline-block">
        <h2 className="font-serif font-bold text-green-700 text-3xl mb-1 tracking-wid">Skills</h2>
        <div className="h-2 bg-green-700 mx-8 group-hover:mx-0 duration-500 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center w-full mt-12 space-x-3 max-w-md flex-wrap">
         {
            skillList.map((skill) =><Skill key={skill.imgLink} imgLink={skill.imgLink} title={skill.title}/>)
         }
        </div>
    </div>
  )
  
}
