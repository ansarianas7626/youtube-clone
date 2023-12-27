import React from 'react'
import { MdHomeFilled, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { LiaYoutubeSquare } from "react-icons/lia";



const ShortSideBar = () => {
  
  return (
    <div className="h-screen w-20 overflow-x-hidden scrollbar-hide sticky left-0">

      <section className='px-1'>
        <ul>
          <li className='hover:bg-gray-100 py-4 text-xs rounded-lg cursor-pointer transition-all flex flex-col justify-center items-center'><MdHomeFilled className='text-2xl mb-1'/>Home</li>
          <li className='hover:bg-gray-100 py-4 text-xs rounded-lg cursor-pointer transition-all flex flex-col justify-center items-center'><SiYoutubeshorts className='text-2xl mb-1'/>Shorts</li>
          <li className='hover:bg-gray-100 py-4 text-xs rounded-lg cursor-pointer transition-all flex flex-col justify-center items-center'><MdOutlineSubscriptions className='text-2xl mb-1'/>Subscription</li>
          <li className='hover:bg-gray-100 py-4 text-xs rounded-lg cursor-pointer transition-all flex flex-col justify-center items-center'><LiaYoutubeSquare className='text-2xl mb-1'/>You</li>
        </ul>
      </section>

    
    </div>
  )
}

export default ShortSideBar



