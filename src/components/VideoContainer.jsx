import React from 'react'
import CategoryBar from './CategoryBar'
import VideosFeed from './VideosFeed'

const VideoContainer = ({showSidebar}) => {
  return (
    <div className={`h-[calc(100vh-56px)] ${showSidebar? "w-[calc(100vw-80px)]" : "w-[calc(100vw-240px)]"} flex flex-col`}>
        <CategoryBar/>
        <VideosFeed/>
    </div>
  )
}

export default VideoContainer
