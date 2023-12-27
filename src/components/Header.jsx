import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { RiLiveLine } from "react-icons/ri";
import { CiUser, CiBellOn } from "react-icons/ci";
import { LiaBarsSolid } from "react-icons/lia";
import { YOUTUBE_LOGO } from '../utils/constants';




const Header = ({ handleToggle }) => {

  
  return (
    <div className='w-full h-14 flex items-center justify-between pl-4 pr-6 border-b-[1px] overflow-hidden sticky top-0 z-10'>

      {/* hamburger & logo */}
      <div className='flex items-center space-x-1'>
        <div onClick={handleToggle} className='w-10 h-10 flex justify-center items-center cursor-pointer rounded-full text-2xl hover:bg-gray-200 transition-all'>
          <LiaBarsSolid />
        </div>

        <div className='flex items-center cursor-pointer'>
          <img className='h-14' src={YOUTUBE_LOGO} alt="YouTube-Logo" />
        </div>
      </div>

      <div className='flex items-center space-x-4'>
        <div className='flex items-center w-[600px] h-10 rounded-full overflow-hidden'>
          <input 
          className='h-full w-[90%] outline-none  px-3 py-1 placeholder:font-semibold rounded-l-full border-[1px] border-stone-300 focus:border-blue-800' type="text" placeholder='Search'/>

          <button 
          className='text-2xl bg-gray-100 hover:bg-gray-200 h-full w-[10%] flex justify-center items-center border-[1px] border-stone-300 transition-all rounded-r-full border-l-0'>
            <IoIosSearch />
          </button>
        </div>

        <span className='w-10 h-10 flex justify-center items-center rounded-full text-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all'><FaMicrophone /></span>
      </div>

      <div className='flex items-center space-x-4'>
        <div className='w-10 h-10 flex justify-center items-center cursor-pointer rounded-full text-2xl hover:bg-gray-200 transition-all'><RiLiveLine /></div>
        <div className='w-10 h-10 flex justify-center items-center cursor-pointer rounded-full text-2xl hover:bg-gray-200 transition-all'><CiBellOn /></div>
        <div className='w-10 h-10 flex justify-center items-center cursor-pointer rounded-full border-[1px] border-stone-300 text-xl transition-all'><CiUser /></div>
      </div>

    </div>
  )
}

export default Header
