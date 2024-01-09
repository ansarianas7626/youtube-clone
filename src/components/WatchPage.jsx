import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../redux/appSlice'
import { useSearchParams } from 'react-router-dom'
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

const WatchPage = () => {

  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()

  const videos = useSelector((state)=>state.videos?.videosData)
  
  const matchedVideo = videos?.filter((video)=>video.id === searchParams.get("v"));
  // console.log(matchedVideo);

  const { channelId, title, channelTitle } = matchedVideo[0]?.snippet;


  const channelLogo = useChannelLogo(channelId);

  useEffect(()=>{
    dispatch(closeMenu())
  },[])


  return (
    <div className='w-[calc(100vw-80px)] flex justify-between pl-5 pr-28 pt-7 h-screen overflow-y-scroll'>
      {/* Left container */}
      <div className='w-[75%] h-auto'>
        {/* Video */}
        <div className='bg-white w-full h-[650px] rounded-lg overflow-hidden'>
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
        <div className='flex flex-col space-y-4 pt-3'>
          {/* Video title */}
          <h3 className='font-semibold text-xl'>{title}</h3>
          
          {/* channel detail and button container */}
          <div className='flex items-center justify-between'>
            {/* left */}
            <div className='flex'>
              {/* channel logo */}
              <div className='rounded-full h-10 w-10 overflow-hidden bg-gray-300 mr-3'>
                <img src={channelLogo} alt="channel-logo" />
              </div>
              {/* channel name */}
              <div className='flex flex-col mr-6'>
                <span className='font-semibold'>{channelTitle}</span>
                <span className='text-xs'>41.1 M Subscribers</span>
              </div>
              <button className='bg-black hover:bg-stone-900 text-white rounded-3xl px-4 py-2 h-fit font-semibold'>subscribe</button>
            </div>

            {/* right */}
            <div className='flex space-x-3'>
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
            <span>{matchedVideo[0]?.statistics?.viewCount} Views</span>
            <span className='text-sm'>{matchedVideo[0]?.snippet?.description}</span>
            <span className='text-sm cursor-pointer'>more...</span>
          </div>
        </div>

        {/* comments container */}
        <CommentsContainer videoId = {searchParams.get("v")}/>

      </div>

      {/* Right Container */}
      {/* <RecommentVideosContainer/> */}
      <LiveChatContainer/>
    </div>
  )
}

export default WatchPage
