import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleThemeMode } from '../redux/appSlice';

const ThemeToggleBtn = () => {

    const dispatch = useDispatch();
    const { toggleTheme } = useSelector((state)=>state.app);

    const handleCheckboxChange = () => {
        dispatch(toggleThemeMode());
    }

    // Theme Mode
    const mode = useSelector((store)=> store.app.toggleTheme);


  return (
    <>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
        {/* Input checkbox */}
        <input
          type='checkbox'
          checked={toggleTheme}
          onChange={handleCheckboxChange}
          className='sr-only'
        />

        {/* Slider range */}
        <span
          className={`slider mx-2 flex h-6 w-[40px] items-center rounded-full p-1 duration-200 ${
            toggleTheme ? 'bg-white' : 'bg-[#CCCCCE]'
          }`}
        >
        
          {/* Slifing Dot */}
          <span
            className={`dot h-4 w-4 rounded-full duration-200 ${
                toggleTheme ? 'translate-x-[15px] bg-youTube-dark' : 'bg-white'
            }`}
          ></span>
        </span>
      </label>
    </>
  )
}

export default ThemeToggleBtn
