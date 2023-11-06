export default function Timeline({title,subtitle,description}) {
  return (
    <div className='font-sans px-6 p-2  border-l-4 border-green-700 flex flex-col gap-1 relative pb-8 group'>
        <div className="border-4 border-white w-4 h-4 absolute top-4 -left-[9.8px] rounded-full bg-green-900 group-hover:scale-125 duration-300 dot"></div>
        <h3 className='text-lg font-semibold  text-green-700'>{title}</h3>
        <p className='text-sm text-gray-600'>{subtitle}</p>
        <p className="text-base font-normal text-gray-600">{description}</p>
    </div>
  )
}
