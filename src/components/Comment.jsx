import React from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import {  } from "react-icons/ai";



const Comment = () => {
  return (
    <div className='flex'>
      <div className='h-10 w-10 bg-gray-200 rounded-full mr-3'>

      </div>

      <div className='flex flex-col gap-2'>
        <span className='font-semibold'>@username</span>
        <span className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum accusamus, vel quam exercitationem natus assumenda doloribus fugit corporis! Obcaecati dicta placeat culpa eum provident odio illo et nesciunt hic repellat.</span>
        <div className='flex'>
            <span className='hover:bg-stone-200 text-xl cursor-pointer rounded-full p-2'><AiOutlineLike /></span>
            <span className='hover:bg-stone-200 text-xl cursor-pointer rounded-full p-2'><AiOutlineDislike /></span>
            <span className='text-xs font-semibold hover:bg-stone-200 cursor-pointer rounded-2xl p-2'>Reply</span>
        </div>
      </div>
    </div>
  )
}

export default Comment