import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import { YOUTUBE_API_KEY } from '../utils/constants'

const CommentsContainer = ({ videoId }) => {

  const [comments, setComments] = useState(null);

  const fetchComments = async()=>{
    const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${YOUTUBE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`);
    const json = await data.json();
    setComments(json.items);
    // console.log(json.items);
  }


  useEffect(()=>{
    comments === null && fetchComments();
  },[])
  
  return (
    <div className='w-full min-h-fit pb-14'>
        <h3 className='font-bold text-xl my-4'>Comments</h3>
        <div className='flex flex-col gap-3'>
          {
            comments?.map((comment)=> <Comment
            key={comment.id}
            commentData = {comment}
            />)
          }
        </div>
    </div>
  )
}

export default CommentsContainer
