import { education } from "../../public/data/projectList";
import Timelines from "./timeline/Timelines";

export default function Educations() {
  return (
    <div className="font-serif px-8 pb-16 mx-4 flex flex-col items-center" id="#project">
        <div className="group inline-block">
        <h2 className="font-serif font-bold text-green-700 text-3xl mb-1 tracking-wide">Education</h2>
        <div className="h-2 bg-green-700 mx-8 group-hover:mx-0 duration-500 rounded-full"></div>
        </div>
        <div className="flex justify-center w-full mt-12">
          <Timelines data={education}/>
        </div>
    </div>
  )
  
}
