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

const WatchPage = () => {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  
  const currentVideo = useSelector((state)=>state.videos.watchPageVideo);
  
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


  return (
    <div className='lg:w-[calc(100vw-80px)] flex justify-between px-2 lg:pl-5 pt-5 lg:pt-7 h-screen overflow-y-scroll'>
      {/* Left container */}
      <div className='w-full lg:w-[75%] h-auto'>
        {/* Video */}
        <div className='bg-white w-full h-[300px] sm:h-[450px] lg:h-[650px] rounded-lg overflow-hidden'>
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
        <div className='flex flex-col space-y-4 pt-3 '>
          {/* Video title */}
          <h3 className='font-semibold text-xl'>{currentVideo?.[0]?.snippet?.title}</h3>
          
          {/* channel detail and button container */}
          <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between'>
            {/* left */}
            <div className='flex justify-between lg:justify-normal'>
              {/* channel logo */}
              <div className='flex'>
                <div className='rounded-full h-10 w-10 overflow-hidden bg-gray-300 mr-3'>
                  {/* <img src={channelLogo} alt="channel-logo" /> */}
                </div>
                {/* channel name */}
                <div className='flex flex-col lg:mr-6'>
                  <span className='font-semibold line-clamp-1 md:line-clamp-none'>{currentVideo?.[0]?.snippet?.channelTitle}</span>
                  <span className='text-xs'>41.1 M Subscribers</span>
                </div>
              </div>
              <button className='bg-black hover:bg-stone-900 text-white rounded-3xl px-4 py-2 h-fit font-semibold lg:mx-3'>subscribe</button>
            </div>

            {/* right */}
            <div className='flex space-x-3 overflow-auto scrollbar-hide'>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-4 py-2 font-semibold h-fit flex items-center'><AiOutlineLike className='mr-2'/>Like</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-4 py-2 font-semibold h-fit flex items-center'><PiShareFatLight className='mr-2'/>Share</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-4 py-2 font-semibold h-fit flex items-center'><TfiDownload className='mr-2'/>Download</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-4 py-2 font-semibold h-fit flex items-center'><HiOutlineScissors className='mr-2'/>Clips</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-3xl px-4 py-2 font-semibold h-fit flex items-center'><RiPlayListAddFill className='mr-2'/>Save</button>
              <button className='bg-gray-100 hover:bg-gray-200 transition-all rounded-full px-[14px] py-2 font-semibold h-fit flex items-center'>...</button>
            </div>
          </div>

          {/* description box container */}
          <div className='flex flex-col p-2 space-y-2 w-full min-h-28 overflow-hidden bg-gray-100 rounded-lg'>
            <span>{currentVideo?.[0]?.statistics?.viewCount} Views</span>
            <span className='text-sm'>{currentVideo?.[0]?.snippet?.description}</span>
            <span className='text-sm cursor-pointer'>more...</span>
          </div>
        </div>

        {/* comments container */}
        <CommentsContainer videoId = {searchParams.get("v")}/>

      </div>

      {/* Right Container */}
      {/* <RecommentVideosContainer/> */}
      <div className='lg:w-[24%] hidden lg:block'>
        <LiveChatContainer/>
      </div>
    </div>
  )
}

export default WatchPage
