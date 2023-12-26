import React from 'react'
import CategoryBar from './CategoryBar'
import VideosFeed from './VideosFeed'

const VideoContainer = () => {
  return (
    // <div className='h-[calc(100vh-56px)] w-full overflow-scroll flex flex-col px-5'>
    <div className='h-[calc(100vh-56px)] w-[calc(100vw-240px)] flex flex-col bg-green-300'>
        <CategoryBar/>
        <VideosFeed/>
    </div>
  )
}

export default VideoContainer
