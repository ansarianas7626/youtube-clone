import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useChannelLogo from '../Hooks/useChannelLogo';

const VideoCard = ({ videoData }) => {

  const { isMenuOpen } = useSelector((state)=> state.app)

  const { snippet, statistics  } = videoData;
  const { channelId, thumbnails, channelTitle, publishedAt, title } = snippet;

  const channelLogo = useChannelLogo(channelId);

  // This function is to reduce the description length
  const truncate = (string, n)=>{
    return string?.length > n ? string.substr(0, n-1) + "..." : string;
  }

  return (
    <div className={`flex flex-col space-y-3 max-w-full sm:w-[300px] ${isMenuOpen? "lg:max-w-[340px]" : "md:max-w-[310px]"} h-fit transition-all cursor-pointer`}>
        <div className='w-full h-56 sm:h-44 rounded-xl overflow-hidden bg-gray-300'>
          <img className='w-full h-full' src={thumbnails?.medium?.url} alt="video-thumbnail" />
        </div>

      <div className='flex'>
        <div className='h-10 w-10 flex bg-gray-300 rounded-full mr-2 overflow-hidden'>
          <img className='w-full h-full' src={channelLogo} alt="channel-Profile-Pic" />
        </div>

        <div className='w-fit h-fit flex flex-col'>
            <p className='font-semibold'>{truncate(title, 50)}</p>
            <span className=''>{channelTitle}</span>
            <span>{statistics?.viewCount} views 3 hours ago</span>
        </div>
      </div>

    </div>
  )
}

export default VideoCard