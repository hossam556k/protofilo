import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title , backgroundImg ,projectUrl,projectCode,tachnology }) => {
  return (
    <div>
        <div className="relative flex items-center justify-center h-[auto] w-[600px] shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image className="rounded-xl group-hover:opacity-10"   src={backgroundImg} alt=""/>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="txext-6xl text-white tracking-wider text-center">{title}</h2>
            <p className=" pb-4 pt-2 text-white text-center">{tachnology}</p>
            <div className="flex items-center justify-center gap-3">
            <a href={projectUrl} target="_blank" >
          <button className='px-3 py-2'>Demo</button>
          </a>

          
            
          <a  target="_blank"  href={projectCode}>
            
           <button className='px-3 py-2'>Code</button>
      
            </a>
            </div>
        </div>
        
        </div>
    
    </div>
  )
}

export default ProjectItem
