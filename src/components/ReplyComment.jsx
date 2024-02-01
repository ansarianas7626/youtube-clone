import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const ReplyComment = ({ replyData }) => {

    console.log("from reply", replyData);

    const { authorChannelUrl, authorDisplayName, authorProfileImageUrl, likeCount, textDisplay, textOriginal} = replyData?.snippet;

    // Theme Mode
    const mode = useSelector((store)=> store.app.toggleTheme);

  return (
    <div className='flex'>
      <a href={authorChannelUrl} target='_blank'>
        <div className='h-7 w-7 bg-gray-200 rounded-full overflow-hidden mr-3'>
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

            <div className={`${mode===true ? " hover:text-white hover:bg-opacity-15" : "hover:bg-opacity-65 hover:text-black"} hover:bg-stone-200 hover:text-black text-xl cursor-pointer rounded-full p-2`}>
                <AiOutlineDislike />
            </div>
           
        </div>

      </div>
    </div>
  )
}

export default ReplyComment
