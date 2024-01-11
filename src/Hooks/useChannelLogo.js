import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";


const useChannelLogo = (channelId) =>{

    const [channelProfilePic, setChannelProfilePic] = useState(null)

    const fetchProfileImage = async() =>{
        const data = await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id="+channelId+"&key="+YOUTUBE_API_KEY);
        const json = await data.json();
        setChannelProfilePic(json?.items[0]?.snippet?.thumbnails?.default?.url)
    }
    
      useEffect(()=>{
        channelProfilePic===null && fetchProfileImage();
      },[])

      return channelProfilePic
}

export default useChannelLogo;