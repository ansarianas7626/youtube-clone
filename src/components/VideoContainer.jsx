import React from 'react'
import CategoryList from './CategoryList'
import { useSelector } from 'react-redux'
import VideoCard from "../components/VideoCard"
import { Link } from 'react-router-dom'
import VideoCardShimmer from './VideoCardShimmer'
import useVideos from '../Hooks/useVideos'

const VideoContainer = () => {

  const { isMenuOpen } = useSelector((state)=> state.app)
  

  useVideos();
  const videos = useSelector((state)=>state.videos?.videosData)
  // console.log(videos);

  return (
    <div className={`h-[calc(100vh-56px)] w-full ${isMenuOpen? "md:w-[calc(100vw-80px)]" : "md:w-[calc(100vw-240px)]"} flex flex-col`}>
        <CategoryList/>

        {videos !== null ? 
        <div className='h-fit w-full flex justify-center md:justify-start flex-wrap gap-4 overflow-scroll overflow-x-hidden px-5 py-2'>
          {videos?.map((video)=>(
            <Link to={"/watch?v="+video.id} key={video?.id}>
              <VideoCard
              videoData = {video}/>
            </Link>
          ))}
        </div>
        :
        <div className='h-fit w-full flex justify-center md:justify-start flex-wrap gap-4 overflow-scroll overflow-x-hidden px-5 py-2'>
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