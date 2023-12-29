import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList'
import { useSelector } from 'react-redux'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from "../components/VideoCard"
import { Link } from 'react-router-dom'
import VideoCardShimmer from './VideoCardShimmer'

const VideoContainer = () => {

  const { isMenuOpen } = useSelector((state)=> state.app)

  const [videos, setVideos] = useState(null);

  const fetchVideos = async()=>{
    const data = await fetch(YOUTUBE_API+import.meta.env.VITE_YOUTUBE_API_KEY)
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  }

  useEffect(()=>{
    videos === null && fetchVideos();
  },[])


  return (
    <div className={`h-[calc(100vh-56px)] ${isMenuOpen? "w-[calc(100vw-80px)]" : "w-[calc(100vw-240px)]"} flex flex-col`}>
        <CategoryList/>

        {videos !== null ? 
        <div className='h-fit w-full flex flex-wrap gap-4 overflow-scroll overflow-x-hidden px-5 py-2'>
          {videos?.map((video)=>(
            <Link to={"/watch?v="+video.id} key={video?.id}>
              <VideoCard
              videoData = {video}/>
            </Link>
          ))}
        </div>
        :
        <div className='h-fit w-full flex flex-wrap gap-4 overflow-scroll overflow-x-hidden px-5 py-2'>
          {
            Array(15).fill().map((shimmerCard, idx)=>{
              return <VideoCardShimmer key={idx}/>
            })
          }
        </div>}

    </div>
  )
}

export default VideoContainer