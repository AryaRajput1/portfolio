function Skill({imgLink,title}) {
  return (
    <div className="shadow-md w-20 h-20 border rounded-full overflow-hidden hover:scale-105 p-2 hover:shadow-xl relative group cursor-pointer">
        <img src={imgLink} className="scale-90 w-full h-full object-scale-down"/>
        <p className="absolute bg-green-700 bg-opacity-80  inset-x-0 inset-y-0 text-white font-bold flex justify-center items-center text-xs group-hover:opacity-100 opacity-0 duration-500 p-4">{title}</p>
    </div>
  )
}

export default Skill