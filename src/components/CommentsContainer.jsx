import React from 'react'
import Comment from './Comment'
import { YOUTUBE_API_KEY } from '../utils/constants'

const CommentsContainer = ({ videoId }) => {

    // const fetchcomments = async ()=>{
    //     // const data = await fetch("https://www.googleapis.com/youtube/v3/commentThreads?key="+YOUTUBE_API_KEY+"&textFormat=plainText&part=snippet&videoId="+videoId+"&maxResults=50");
    //     const data = await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&textFormat=plainText&videoId=_VB39Jo8mAQ&key="+YOUTUBE_API_KEY);
    //     const json = await data.json();
    //     console.log(json);
    // }

  return (
    <div className='w-full min-h-fit pb-14'>
        <h3 className='font-bold text-xl my-4'>Comments</h3>
        <div className='flex flex-col gap-3'>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
    </div>
  )
}

export default CommentsContainer
