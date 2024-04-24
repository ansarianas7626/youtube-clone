import React from 'react'

const RecoomendVideoCard = () => {
  return (
    <div className='flex cursor-pointer'>
        {/* Video */}
      <div className='bg-gray-200 w-44 h-24 rounded-md mr-2'>
        <img src="" alt="" />
      </div>

      {/* info */}
      <div className='flex flex-col'>
        <h4 className='text-[13px] font-semibold pt-[2px]'>Going to CHINA 🇨🇳 on BULLET TRAIN</h4>
        <span className='text-sm text-gray-500'>yatri doctor</span>
        <span className='text-sm text-gray-500'>29K views 2 hours ago</span>
      </div>
    </div>
  )
}

export default RecoomendVideoCard
