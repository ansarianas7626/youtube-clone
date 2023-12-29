import React from 'react'
import { useSelector } from 'react-redux'

const VideoCardShimmer = () => {

    const { isMenuOpen } = useSelector((state)=> state.app)


  return (
    <div className={`flex flex-col space-y-3 ${isMenuOpen? "w-[340px]" : "w-[310px]"} h-fit transition-all`}>
        <div className='w-[full] h-[182px] rounded-xl overflow-hidden bg-gray-200'>
        </div>

      <div className='flex'>
        <div className='h-10 w-10 flex bg-gray-200 rounded-full mr-2 overflow-hidden'>
        </div>

        <div className='w-fit h-fit flex flex-col space-y-2'>
            <div className='bg-gray-200 w-56 h-3'></div>
            <div className='bg-gray-200 w-56 h-3'></div>
            <div className='bg-gray-200 w-28 h-3'></div>
            <div className='bg-gray-200 w-48 h-3'></div>
        </div>
      </div>
    </div>
  )
}

export default VideoCardShimmer
