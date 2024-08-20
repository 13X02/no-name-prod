import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <>
    <nav className='flex justify-between px-6 py-8 border-b-2 border-gray-400 font-poppins'>

      <div className='left-nav-content flex items-center'>
        <p className='text-2xl font-bold text-[#1090CB]'>CYAN</p>
      </div>
      <div id='nav-links' className='  gap-16 items-center '>
        <a href='#' className='hover:text-[#1090CB]'>Home</a>
        <a href='#'className='hover:text-[#1090CB]'>About Us</a>
        <a href='#'className='hover:text-[#1090CB]'>Products</a>
        <button className='bg-[#1090CB] text-white p-2 rounded-lg hover:bg-white hover:text-[#1090CB] transition  delay-50 border-2 hover:border-[#1090CB]'>Request Demo</button>
      </div>
      <div id='hamburger-menu' className=''>

        <button onClick={(e)=>{setToggle(!toggle)}}>
        <FontAwesomeIcon className='text-[FontAwesomeIcon] text-xl' icon={faBars} />      

        </button>
      </div>
      


    </nav>
    {
        toggle && (
            <div className='flex flex-col md:hidden w-full justify-center items-center gap-5 font-poppins'>
                <a href='#' className='hover:text-[#1090CB]'>Home</a>
        <a href='#'className='hover:text-[#1090CB]'>About Us</a>
        <a href='#'className='hover:text-[#1090CB]'>Products</a>
            </div>
        )
      }
      </>
  )
}

export default Navbar