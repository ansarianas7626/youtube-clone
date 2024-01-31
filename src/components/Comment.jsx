import React from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import {  } from "react-icons/ai";
import { useSelector } from 'react-redux';



const Comment = ({ commentData }) => {

  // console.log("commentData", commentData.snippet.topLevelComment.snippet);

  const { authorDisplayName, authorProfileImageUrl, likeCount, textDisplay, textOriginal} = commentData?.snippet?.topLevelComment?.snippet;

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);

  return (
    <div className='flex'>
      <div className='h-10 w-10 bg-gray-200 rounded-full overflow-hidden mr-3'>
        <img className='w-full h-full bg-contain bg-center' src={authorProfileImageUrl} alt="" />
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
          <span className='font-bold text-sm'>{authorDisplayName}</span>
          <span className='text-sm'>{textDisplay || textOriginal}</span>
        </div>
        <div className='flex'>
            <div className='hover:bg-stone-200 hover:text-black text-xl cursor-pointer rounded-full p-2 flex items-center space-x-1'>
              <AiOutlineLike />
              <span className='text-sm'>{likeCount}</span>
            </div>
            <div className='hover:bg-stone-200 hover:text-black text-xl cursor-pointer rounded-full p-2'><AiOutlineDislike /></div>
            <div className='text-xs font-semibold hover:bg-stone-200 hover:text-black cursor-pointer rounded-2xl p-2'>Reply</div>
        </div>
      </div>
    </div>
  )
}

export default Comment