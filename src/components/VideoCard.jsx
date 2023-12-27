import React from 'react'

const VideoCard = () => {
  return (
    <div className='flex flex-col space-y-3 w-[340px] h-fit'>
        <div className='w-full h-48 rounded-xl bg-gray-300'>
            <img src="" alt="" />
        </div>

      <div className='flex'>
        <div className='h-10 w-10 flex bg-gray-300 rounded-full mr-2'>
        </div>

        <div className='w-fit h-fit flex flex-col'>
            <p className='font-semibold'>{"Your Titile will bw here".slice(0,65)}...</p>
            <span>Channel name</span>
            <span>91K views 3 hours ago</span>
        </div>
      </div>

    </div>
  )
}

export default VideoCard