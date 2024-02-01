import React, { useState } from 'react'
import formatViewCount from '../utils/formatViewCount';
import { useSelector } from 'react-redux';

const VideoDescription = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const currentVideo = useSelector((state)=>state.videos.watchPageVideo);

    // Theme Mode
    const mode = useSelector((store)=> store.app.toggleTheme);

    const formatDescription = (rawDescription) => {
      // Split the raw description into an array of lines
      const lines = rawDescription?.split('\n').filter(line => line.trim() !== '');
  
      // Map each line to a <p> (paragraph) element
      const formattedLines = lines?.map((line, index) => <p key={index}>{line}</p>);
  
      // Return the formatted content
      return formattedLines;
  };

    const formattedViewCount = formatViewCount(currentVideo?.[0]?.statistics?.viewCount)
    const formattedContent = formatDescription(currentVideo?.[0]?.snippet?.description);
    console.log("formattedContent", formattedContent);
  return (
    <div className={`${mode===true? "bg-stone-700 bg-opacity-50 text-white" : "bg-gray-100 text-black"} flex flex-col p-2 space-y-2 w-full min-h-28 overflow-hidden  rounded-lg`}>
        <span className='text-sm font-semibold'>{formattedViewCount} Views</span>
        <span className='text-sm space-y-2'>{isExpanded? formattedContent : formattedContent?.slice(0,4)}</span>
        <span onClick={()=>setIsExpanded(!isExpanded)} className='text-sm font-semibold cursor-pointer'>{isExpanded? "Show Less": "...more"}</span>
     </div>
  )
}

export default VideoDescription
