import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../redux/videosSlice";
import { useEffect } from "react";
import { YOUTUBE_API, YOUTUBE_API_KEY } from "../utils/constants";


const useVideos = () =>{

    const dispatch = useDispatch()
    const videos = useSelector((state)=>state.videos?.videosData)

    const fetchVideos = async()=>{
        const data = await fetch(YOUTUBE_API+YOUTUBE_API_KEY);
        const json = await data.json();
        dispatch(addVideos(json.items));
      }

      useEffect(()=>{
        videos === null && fetchVideos();
      },[])
}

export default useVideos