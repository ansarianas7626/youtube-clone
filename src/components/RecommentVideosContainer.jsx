import React from 'react'
import RecoomendVideoCard from './RecoomendVideoCard'

const RecommentVideosContainer = () => {
  return (
    <div className='flex flex-col gap-5 w-[24%] h-fit'>
    <RecoomendVideoCard/>
    <RecoomendVideoCard/>
    <RecoomendVideoCard/>
    <RecoomendVideoCard/>
  </div>
  )
}

export default RecommentVideosContainer
