import Timeline from './Timeline'

function Timelines({data}) {
  return (
    <div className='flex flex-col md:flex-row md:gap-12'>
        {data?.map(dataItem=>{
          return <Timeline key={dataItem.name} {...dataItem}/>  
        })}
    </div>
  )
}

export default Timelines