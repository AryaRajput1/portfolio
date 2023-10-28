function ProjectCard({imgLink,title,link,bannerTitle}) {
  return (
    <div className="relative bg-white w-72 h-72 shadow-md group hover:shadow-xl font-sans rounded-xl border-gray-400 hover:scale-105 duration-500">
        <span className="border border-green-700 shadow-md -right-10 font-bold top-3 inline-block absolute bg-green-700 px-4 py-1 rounded-2xl text-white">{bannerTitle}</span>
            <img src={imgLink} className="w-full h-full object-cover  rounded-xl"/>
            <div className="absolute bottom-0 inset-x-0 flex justify-between p-4 bg-green-700 text-white bg-opacity-80 group-hover:opacity-100 opacity-0 duration-1000 rounded-b-md">{title} <a href={link}>Link</a></div>
        </div>
  )
} 

export default ProjectCard