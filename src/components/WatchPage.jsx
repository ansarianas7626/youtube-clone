import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, toggleMenu } from '../redux/appSlice'
import { json, useNavigate, useSearchParams } from 'react-router-dom'
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { HiOutlineScissors } from "react-icons/hi2";
import { RiPlayListAddFill } from "react-icons/ri";
import RecoomendVideoCard from './RecoomendVideoCard';
import CommentsContainer from './CommentsContainer';
import useChannelLogo from '../Hooks/useChannelLogo';
import RecommentVideosContainer from './RecommentVideosContainer';
import LiveChatContainer from './LiveChatContainer';
import useVideos from '../Hooks/useVideos';
import { YOUTUBE_API_KEY } from '../utils/constants';
import { addWatchpageVideo } from '../redux/videosSlice';
import formatViewCount from '../utils/formatViewCount';
import VideoDescription from './VideoDescription';
import { BsThreeDots } from "react-icons/bs";

const WatchPage = () => {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  
  const currentVideo = useSelector((state)=>state.videos.watchPageVideo);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const fetchCurrentVideo = async()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&hl=en&id=${searchParams.get("v")}&regionCode=IN&key=${YOUTUBE_API_KEY}`)
    const json = await data.json();
    dispatch(addWatchpageVideo(json.items))
  }
  
  // const channelLogo = useChannelLogo(currentVideo?.[0]?.snippet?.channelId);
  
  useEffect(()=>{
    dispatch(closeMenu());
    fetchCurrentVideo();

    return()=>{
      dispatch(toggleMenu());
    }

  },[]);

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);


  return (
    <div className={`${mode===true ? "bg-youTube-dark" : "bg-white"} lg:w-[calc(100vw-80px)] flex justify-between lg:pl-5 pt-5 lg:pt-7 h-screen overflow-y-scroll`}>
      {/* Left container or bottom container on mobile */}
      <div className='w-full lg:w-[75%] h-auto'>
        {/* Video */}
        <div className='w-full h-[300px] sm:h-[450px] lg:h-[650px] md:rounded-lg overflow-hidden'>
          <iframe 
          className='w-full h-full'
          // width="560" 
          // height="315" 
          src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen></iframe>
        </div>
        
        {/* info container */}
        <div className='flex flex-col space-y-4 pt-3 px-2'>
          {/* Video title */}
          <h3 className={`${mode===true? "text-white" : "text-black"} font-semibold text-xl`}>{currentVideo?.[0]?.snippet?.title}</h3>
          
          {/* channel detail and button container */}
          <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between'>
            {/* left buttons */}
            <div className='flex justify-between lg:justify-normal'>
              {/* channel logo */}
              <div className='flex'>
                <div className='rounded-full h-10 w-10 overflow-hidden bg-gray-300 mr-3'>
                  {/* <img src={channelLogo} alt="channel-logo" /> */}
                </div>
                {/* channel name */}
                <div className='flex flex-col lg:mr-6'>
                  <span className={`${mode===true? "text-white" : "text-black"} font-semibold line-clamp-1 md:line-clamp-none`}>{currentVideo?.[0]?.snippet?.channelTitle}</span>
                  <span className={`${mode===true? "text-white" : "text-black"} text-xs`}>41.1 M Subscribers</span>
                </div>
              </div>
              <button className={`${mode===true? "bg-white text-black hover:bg-stone-200" : "bg-black text-white hover:bg-stone-900"} rounded-3xl px-3 md:px-4 py-2 h-fit font-semibold mx-3`}>subscribe</button>
            </div>

            {/* like share subscribe buttons */}
            <div className='flex space-x-3 overflow-auto scrollbar-hide'>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-3 md:px-4 py-1 md:py-2 font-semibold h-fit flex items-center'><AiOutlineLike className='mr-2'/>Like</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-3 md:px-4 py-1 md:py-2 font-semibold h-fit flex items-center'><PiShareFatLight className='mr-2'/>Share</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-3 md:px-4 py-1 md:py-2 font-semibold h-fit flex items-center'><TfiDownload className='mr-2'/>Download</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-3 md:px-4 py-1 md:py-2 font-semibold h-fit flex items-center'><HiOutlineScissors className='mr-2'/>Clips</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-3 md:px-4 py-1 md:py-2 font-semibold h-fit flex items-center'><RiPlayListAddFill className='mr-2'/>Save</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-full p-2 md:p-3 font-semibold h-fit flex items-center'><BsThreeDots /></button>
            </div>
          </div>

          {/* description box container */}

          <VideoDescription/>

          {/* comments container */}
          <CommentsContainer videoId = {searchParams.get("v")}/>
        </div>

      </div>

      {/* Right Container */}
      {/* <RecommentVideosContainer/> */}
      <div className='lg:w-[24%] hidden lg:block'>
        {/* <LiveChatContainer/> */}
        <RecommentVideosContainer/>
      </div>
    </div>
  )
}

export default WatchPage
