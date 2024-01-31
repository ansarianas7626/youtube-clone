import React from 'react'
import { CiUser } from "react-icons/ci";
import { useSelector } from 'react-redux';



const LiveChatMessage = ({chatData}) => {

    const proifilePic = "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"

    const {name, message} = chatData;

    // Theme Mode
    const mode = useSelector((store)=> store.app.toggleTheme);


  return (
    <div className={`${mode===true? "hover:bg-stone-800": "hover:bg-gray-100"} w-full flex cursor-pointer px-5 py-1`}>
        {/*  Profile pic */}
        <div className='flex items-center mr-1'>
            <div className='w-6 h-6 flex justify-center items-center overflow-hidden bg-gray-300 rounded-full mr-3'>
                {/* <img className='w-full h-full bg-contain bg-center' src={proifilePic} alt="profile-img" /> */}
                <CiUser />
            </div>
        </div>

        {/* name and chat message */}
        <p className={`${mode===true? "text-white": "text-black"} text-sm`}><span className={`${mode===true? "text-gray-400": "text-gray-600"} font-semibold mr-2`}>{name}</span>{message}</p>
        
    </div>
  )
}

export default LiveChatMessage
