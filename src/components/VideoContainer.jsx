import React, { useEffect } from 'react'
import CategoryBar from './CategoryBar'
import VideosFeed from './VideosFeed'
import { useSelector } from 'react-redux'
import { YOUTUBE_API } from '../utils/constants'

const VideoContainer = () => {

  const { isMenuOpen } = useSelector((state)=> state.app)

  const fetchVideos = async()=>{
    const data = await fetch(YOUTUBE_API+import.meta.env.VITE_YOUTUBE_API_KEY)
    const json = await data.json();
    console.log(json.items);
  }

  useEffect(()=>{
    fetchVideos();
  },[])

  return (
    <div className={`h-[calc(100vh-56px)] ${isMenuOpen? "w-[calc(100vw-80px)]" : "w-[calc(100vw-240px)]"} flex flex-col`}>
        <CategoryBar/>
        <VideosFeed/>
    </div>
  )
}

export default VideoContainer
