import React from 'react'

const LiveChatMessage = ({name, chatMessage}) => {

    const proifilePic = "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"

  return (
    <div className='w-full flex hover:bg-gray-200 cursor-pointer px-5 py-1'>
        {/*  Profile pic */}
        <div className='flex items-center mr-1'>
            <div className='w-6 h-6 flex justify-center items-center overflow-hidden bg-gray-300 rounded-full mr-3'>
                <img className='w-full h-full bg-contain bg-center' src={proifilePic} alt="profile-img" />
            </div>
        </div>

        {/* name and chat message */}
        <p className='text-sm'><span className='text-gray-600 font-semibold mr-2'>{name}</span>{chatMessage}</p>
        
    </div>
  )
}

export default LiveChatMessage
