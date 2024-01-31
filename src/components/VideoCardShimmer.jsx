import React from 'react'
import { useSelector } from 'react-redux'

const VideoCardShimmer = () => {

    const { isMenuOpen } = useSelector((state)=> state.app)

    // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);

  return (
    <div className={`flex flex-col space-y-3 w-full sm:w-[300px] ${isMenuOpen? "w-[340px]" : "w-[310px]"} h-fit transition-all`}>
        <div className={`${mode===true? "bg-stone-800": "bg-gray-200"} w-full h-56 sm:h-44 rounded-xl overflow-hidden animate-pulse`}>
        </div>

      <div className='flex'>
        <div className={`${mode===true? "bg-stone-800": "bg-gray-200"} h-10 w-10 flex bg-gray-200 rounded-full mr-2 overflow-hidden animate-pulse`}>
        </div>

        <div className='w-fit h-fit flex flex-col space-y-2'>
            <div className={`${mode===true? "bg-stone-800": "bg-gray-200"} w-56 h-3 animate-pulse`}></div>
            <div className={`${mode===true? "bg-stone-800": "bg-gray-200"} w-56 h-3 animate-pulse`}></div>
            <div className={`${mode===true? "bg-stone-800": "bg-gray-200"} w-28 h-3 animate-pulse`}></div>
            <div className={`${mode===true? "bg-stone-800": "bg-gray-200"} w-48 h-3 animate-pulse`}></div>
        </div>
      </div>
    </div>
  )
}

export default VideoCardShimmer
