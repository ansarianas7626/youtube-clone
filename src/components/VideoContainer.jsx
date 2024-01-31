import React from 'react'
import CategoryList from './CategoryList'
import { useSelector } from 'react-redux'
import VideoCard from "../components/VideoCard"
import { Link } from 'react-router-dom'
import VideoCardShimmer from './VideoCardShimmer'
import useVideos from '../Hooks/useVideos'
import { YOUTUBE_API_KEY } from '../utils/constants'
import useOnlineStatus from '../Hooks/useOnlineStatus'

const VideoContainer = () => {

  const { isMenuOpen } = useSelector((state)=> state.app)
  

  useVideos();
  const status = useOnlineStatus();
  const videos = useSelector((state)=>state.videos?.videosData);

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);

  return (
    <div className={`${mode===true? "bg-youTube-dark" : "bg-white"} h-[calc(100vh-56px)] w-full ${isMenuOpen? "md:w-[calc(100vw-80px)]" : "md:w-[calc(100vw-240px)]"} flex flex-col`}>
        <CategoryList/>

        {videos !== null ? 
        <div className='h-fit w-full flex justify-center md:justify-start flex-wrap gap-4 overflow-scroll overflow-x-hidden pl-3 lg:pl-5 pr-2 py-2'>
          {videos?.map((video,idx)=>(
            <Link to={"/watch?v="+(video?.kind == "youtube#video"?  video?.id : video.id.videoId)} key={video?.id+idx}>
              <VideoCard
              videoData = {video}/>
            </Link>
          ))}
        </div>
        :
        <div className='h-fit w-full flex justify-center md:justify-start flex-wrap gap-4 overflow-scroll overflow-x-hidden pl-3 lg:pl-5 pr-2 py-2'>
          {
            Array(15).fill().map((shimmerCard, idx)=> <VideoCardShimmer key={idx}/>)
          }
        </div>
        }

        {/* {status== "offline" && <div className='w-full h-full'>
          <h1 className='text-3xl'>Offline</h1>
        </div>} */}
    </div>
  )
}

export default VideoContainer