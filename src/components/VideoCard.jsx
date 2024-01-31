import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useChannelLogo from '../Hooks/useChannelLogo';
import { YOUTUBE_API_KEY } from '../utils/constants';
import stringTruncate from '../utils/stringTruncate';
import formatViewCount from '../utils/formatViewCount';

const VideoCard = ({ videoData }) => {

  const { isMenuOpen } = useSelector((state)=> state.app)

  const { snippet, statistics  } = videoData;
  const { channelId, thumbnails, channelTitle, publishedAt, title } = snippet;

  const channelLogo = useChannelLogo(channelId);
  
  const [videostatistics, setVideostatistics] = useState(null)
  const [vId, setVid] = useState();

  // if(videoData.kind == "youtube#searchResult"){
  //   setVid(videoData?.id?.videoId);
  // }

  // const [kind, setKind] = useState(null);

  // const fetchVideoStatistics = async ()=>{
  //   const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoData?.id || videoData?.id?.videoId}&key=${YOUTUBE_API_KEY}`);
  //   const json = await data.json();
  //   setVideostatistics(json);
  //   console.log("searched result statistics" ,videostatistics);
  // }

  useEffect(()=>{
    // if(videoData?.kind == "youtube#video"){
    //   setKind("youtube#video");
    // }else if(videoData?.kind == "youtube#searchResult"){
    //   setKind("youtube#searchResult");
    //   setVid(videoData?.id?.videoId);
    //   fetchVideoStatistics();
    // }

    // kind=="youtube#searchResult" && 
  },[])
  
  
  // console.log("kind is", kind)

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);
  

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
            <p className={`font-semibold ${mode==true? "text-white" : "text-black"}`}>{stringTruncate(title, 50)}</p>
            <span className={`${mode==true? "text-white" : "text-black"}`}>{channelTitle}</span>
            <span className={`${mode==true? "text-white" : "text-black"} text-sm font-semibold`}>{formatViewCount(statistics?.viewCount)} views 3 hours ago</span>
        </div>
      </div>

    </div>
  )
}

export default VideoCard