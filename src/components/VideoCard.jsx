import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const VideoCard = ({ videoData }) => {

  const { isMenuOpen } = useSelector((state)=> state.app)
  const [channelProfilePic, setChannelProfilePic] = useState(null)

  const { snippet, statistics  } = videoData;
  const { channelId, thumbnails, channelTitle, publishedAt } = snippet;

  const fetchProfileImage = async() =>{
    const data = await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id="+channelId+"&key="+import.meta.env.VITE_YOUTUBE_API_KEY);
    const json = await data.json();
    setChannelProfilePic(json.items[0]?.snippet?.thumbnails?.default?.url)
  }

  useEffect(()=>{
    channelProfilePic===null && fetchProfileImage();
  },[])

  return (
    <div className={`flex flex-col space-y-3 ${isMenuOpen? "w-[340px]" : "w-[310px]"} h-fit transition-all cursor-pointer`}>
        <div className='w-[full] h-48 rounded-xl overflow-hidden bg-gray-300'>
          <img className='w-full h-full' src={thumbnails?.medium?.url} alt="video-thumbnail" />
        </div>

      <div className='flex'>
        <div className='h-10 w-10 flex bg-gray-300 rounded-full mr-2 overflow-hidden'>
          <img className='w-full h-full' src={channelProfilePic} alt="channel-Profile-Pic" />
        </div>

        <div className='w-fit h-fit flex flex-col'>
            <p className='font-semibold'>{snippet?.title.slice(0,50)}...</p>
            <span className=''>{channelTitle}</span>
            <span>{statistics?.viewCount} views 3 hours ago</span>
        </div>
      </div>

    </div>
  )
}

export default VideoCard