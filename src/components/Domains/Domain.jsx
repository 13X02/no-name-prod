import React from 'react'

const Domain = () => {
  return (
    <div className='flex justify-evenly p-10 font-poppins font-medium border-b-2 border-[#C7C7C7]'>
      <div className='flex gap-5 items-center'>
        <div className='flex items-center bg-[#EFEAFF]  p-4 rounded-xl justify-center w-20 h-20' ><img src='analysis.svg'/></div>
        <p>Analytics & Reports</p>
      </div>
      <div className='flex gap-5 items-center'>
        <div className='flex items-center bg-[#ECFFDA]  p-4 rounded-xl justify-center  w-20 h-20'><img src='seo.svg'/></div>
        <p>Automation Tools</p>
      </div>
      <div className='flex gap-5 items-center'>
        <div className='flex items-center bg-[#FFE5DA] p-4 rounded-xl justify-center  w-20 h-20'><img src='pms.svg'/></div>
        <p>Practice Management Systems</p>
      </div>
    </div>
  )
}

export default Domain