import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import { YOUTUBE_API_KEY } from '../utils/constants'
import { useSelector } from 'react-redux';

const CommentsContainer = ({ videoId }) => {

  const [comments, setComments] = useState(null);
  // console.log(comments);

  const fetchComments = async()=>{
    // const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${YOUTUBE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=100`);
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&order=relevance&textFormat=plainText&videoId=${videoId}&key=${YOUTUBE_API_KEY}`);
    const json = await data.json();
    setComments(json.items);
    // console.log(json.items);
  }


  useEffect(()=>{
    comments === null && fetchComments();
  },[])

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);
  
  return (
    <div className={`${mode===true? "text-white" : "text-black"} w-full min-h-fit`}>
        <h3 className='font-bold text-xl pb-4'>{comments?.length} Comments</h3>
        <div className='h-full flex flex-col gap-3 pb-14'>
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
