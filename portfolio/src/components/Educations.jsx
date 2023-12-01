import { useEffect, useState } from "react";
import Timelines from "./timeline/Timelines";
import axios from "axios";
import { educationListData } from "../../public/data/projectList";

export default function Educations() {
  const [educationList,setEducationList]= useState(educationListData);
  useEffect(()=>{
    (async ()=>{
      try{
        const {data}=await axios.get('https://portfolio-b-vqho.onrender.com/api/educations?populate=*')
        const education = data?.data?.map(dataItem=>{
          return {
            name:dataItem.attributes.name,
            duration:dataItem.attributes.duration,
            description: `${dataItem.attributes.field} - ${dataItem.attributes.percentage}`
          }
        })
        setEducationList(education)
      }catch(e){
        setEducationList(educationListData)
        console.log(e);
      }
    })()
  },[])
  return (
    <div className="font-serif px-8 pb-16 mx-4 flex flex-col items-center" id="#project">
        <div className="group inline-block">
        <h2 className="font-serif font-bold text-green-700 text-3xl mb-1 tracking-wide">Education</h2>
        <div className="h-2 bg-green-700 mx-8 group-hover:mx-0 duration-500 rounded-full"></div>
        </div>
        <div className="flex justify-center w-full mt-12">
          <Timelines data={educationList}/>
        </div>
    </div>
  )
  
}
