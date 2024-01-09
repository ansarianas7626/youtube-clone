import React, { useEffect } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import LiveChatMessage from './LiveChatMessage';

export const LiveChatContainer = () => {

    useEffect(() => {
        const i = setInterval(() => {
        }, 2000);

        return () => {
            clearInterval(i);
        };
    }, []);


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
            <div className='w-full overflow-y-scroll'>
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
                <LiveChatMessage name={"Ansari Anas"} chatMessage={"lorem ipsum dollar chat message"} />
            </div>
        </div>
    );
};
