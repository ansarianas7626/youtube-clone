import React from 'react'
import { MdHomeFilled, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { LiaYoutubeSquare } from "react-icons/lia";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';



const ShortSideBar = () => {

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);
  let location = useLocation();
  
  return (
    <div className={`${mode===true? "bg-youTube-dark" : "bg-white"} h-screen w-20 overflow-x-hidden scrollbar-hide sticky left-0 ${location.pathname == '/watch'? "invisible" : ''}`}>

      <section className='px-1'>
        <ul>
          <Link to="/"><li className={`${mode===true ? "text-white" : "text-black"} hover:bg-gray-100 hover:text-black py-4 text-xs rounded-lg cursor-pointer transition-all flex flex-col justify-center items-center`}><MdHomeFilled className='text-2xl mb-1'/>Home</li></Link>
          <Link to="/shorts"><li className={`${mode===true ? "text-white" : "text-black"} hover:bg-gray-100 hover:text-black py-4 text-xs rounded-lg cursor-pointer transition-all flex flex-col justify-center items-center`}><SiYoutubeshorts className='text-2xl mb-1'/>Shorts</li></Link>
          <li className={`${mode===true ? "text-white" : "text-black"} hover:bg-gray-100 hover:text-black py-4 text-xs rounded-lg cursor-pointer transition-all flex flex-col justify-center items-center`}><MdOutlineSubscriptions className='text-2xl mb-1'/>Subscription</li>
          <li className={`${mode===true ? "text-white" : "text-black"} hover:bg-gray-100 hover:text-black py-4 text-xs rounded-lg cursor-pointer transition-all flex flex-col justify-center items-center`}><LiaYoutubeSquare className='text-2xl mb-1'/>You</li>
        </ul>
      </section>

    
    </div>
  )
}

export default ShortSideBar



