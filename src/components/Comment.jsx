import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import {  } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { IoCaretDownSharp } from "react-icons/io5";
import ReplyComment from './ReplyComment';



const Comment = ({ commentData }) => {

  // console.log("commentData", commentData.snippet.topLevelComment.snippet);

  const { authorDisplayName, authorProfileImageUrl, likeCount, textDisplay, textOriginal, authorChannelUrl} = commentData?.snippet?.topLevelComment?.snippet;
  const { totalReplyCount} = commentData?.snippet;
  const { replies } = commentData;

  console.log(replies?.comments[0]?.textDisplay);

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);

  const [expandReplies, setExpandReplies] = useState(false);

  return (
    <div className='flex'>
      <a href={authorChannelUrl} target='_blank'>
        <div className='h-10 w-10 bg-gray-200 rounded-full overflow-hidden mr-3'>
          <img className='w-full h-full bg-contain bg-center' src={authorProfileImageUrl} alt="" />
        </div>
      </a>

      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
          <span className='font-bold text-sm'>{authorDisplayName}</span>
          <span className='text-sm'>{textDisplay || textOriginal}</span>
        </div>

        <div className='flex space-x-2'>
            <div className="flex items-center space-x-1">
              <AiOutlineLike className={`${mode===true ? "hover:text-white hover:bg-opacity-15" : "hover:bg-opacity-65 hover:text-black"} cursor-pointer hover:bg-stone-200 text-4xl rounded-full p-2`}/>
              <span className='text-sm'>{likeCount}</span>
            </div>
            <div className={`${mode===true ? " hover:text-white hover:bg-opacity-15" : "hover:bg-opacity-65 hover:text-black"} hover:bg-stone-200 hover:text-black text-xl cursor-pointer rounded-full p-2`}><AiOutlineDislike /></div>
            <div className={`${mode===true ? " hover:text-white hover:bg-opacity-15" : "hover:bg-opacity-65 hover:text-black"} text-xs font-semibold hover:bg-stone-200 hover:bg-opacity-30 hover:text-black cursor-pointer rounded-2xl p-2`}>Reply</div>
        </div>

        {/* Comment Replies */}

          <div className='flex flex-col space-y-3'>
            {/* Replies Button */}
            {totalReplyCount>0 && <div onClick={()=>{setExpandReplies(!expandReplies)}} className='flex items-center space-x-2 w-fit px-4 py-2 cursor-pointer text-blue-600 rounded-full hover:bg-blue-500 hover:bg-opacity-25'>
              <span className={`${expandReplies? "rotate-180": "rotate-0"} text-sm`}><IoCaretDownSharp /></span>
              <span className='font-semibold'>{totalReplyCount} replies</span>
            </div>}

            {/* Replies Container */}
            {expandReplies && <div className='flex flex-col pl-2'>
              {
                replies?.comments?.length > 0 && replies?.comments?.map((reply, index)=> <ReplyComment key={index} replyData={reply}/>)
              }
            </div>}

          </div>

      </div>
    </div>
  )
}

export default Comment