import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import LiveChatMessage from './LiveChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/chatSlice';
import { IoMdSend } from "react-icons/io";
import { generateRandomComment, generateRandomName } from '../utils/helper';


const LiveChatContainer = () => {

    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const { messages } = useSelector((state)=>state.chat);

    useEffect(()=>{
        const i = setInterval(() => {
            // API Polling
            dispatch(addMessage({name:generateRandomName(), message: generateRandomComment()}));
        }, 1500);

        return ()=>{
            clearInterval(i);
        }
    },[])


  return (
    <div className='flex flex-col w-[24%] h-[650px] rounded-lg border-[1px] border-stone-200'>
        {/* head */}
        <div className='border-b-[1px] border-stone-200'>
            <div className='flex justify-between items-center pl-5 pr-2 py-1'>
                <h2>Live chat</h2>
                <div className='hover:bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full text-xl cursor-pointer'>
                    <HiOutlineDotsVertical />
                </div>
            </div>
        </div>

        {/* chat container */}
        <div className='w-full h-full flex flex-col-reverse py-1 overflow-y-scroll'>
            {messages?.map((msg, idx)=><LiveChatMessage key={idx} chatData={msg}/>)}
        </div>

        {/* chat input box */}
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({name: "Guest", message: liveMessage}))
            setLiveMessage("");
        }}
         className='h-fit w-full flex items-center border-t-[1px] border-stone-200 p-2'>
            <input  
            className='h-full w-full rounded-full outline-none px-3 py-2 bg-gray-100 placeholder:text-gray-600 mr-2 focus:bg-gray-200' 
            type="text" 
            placeholder='Chat as a subscriber'
            value={liveMessage}
            onChange={(e)=>setLiveMessage(e.target.value)}
            />

            <button className='h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer'>
                <IoMdSend />
            </button>
        </form>
  </div>
  )
}

export default LiveChatContainer
